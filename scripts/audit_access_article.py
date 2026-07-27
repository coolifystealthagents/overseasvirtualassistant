#!/usr/bin/env python3
"""Deterministic rendered audit for the secure-access article."""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SLUG = "philippines-virtual-assistant-secure-access-handoff"
TITLE = "Secure account handoff for a Philippines virtual assistant"
CANONICAL = f"https://overseasvirtualassistant.com/blog/{SLUG}"
HTML_PATH = ROOT / ".next/server/app/blog" / f"{SLUG}.html"
SITEMAP_PATH = ROOT / ".next/server/app/sitemap.xml.body"
FORBIDDEN = re.compile(r"\b(?:pricing|price|prices|rate|rates|tier|tiers)\b", re.I)
WORD = re.compile(r"[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)?")


class Node:
    def __init__(self, tag: str, attrs: dict[str, str | None], parent: "Node | None"):
        self.tag = tag
        self.attrs = attrs
        self.parent = parent
        self.children: list[Node] = []
        self.text_parts: list[str] = []

    def text(self) -> str:
        parts = list(self.text_parts)
        for child in self.children:
            parts.append(child.text())
        return re.sub(r"\s+", " ", " ".join(parts)).strip()

    def has_ancestor(self, predicate) -> bool:
        node = self.parent
        while node:
            if predicate(node):
                return True
            node = node.parent
        return False


class TreeParser(HTMLParser):
    voids = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("document", {}, None)
        self.current = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs), self.current)
        self.current.children.append(node)
        if tag not in self.voids:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.voids:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        node = self.current
        while node is not self.root:
            if node.tag == tag:
                self.current = node.parent or self.root
                return
            node = node.parent or self.root

    def handle_data(self, data):
        if self.current.tag not in {"script", "style"}:
            self.current.text_parts.append(data)


def walk(node: Node):
    yield node
    for child in node.children:
        yield from walk(child)


def classes(node: Node) -> set[str]:
    return set((node.attrs.get("class") or "").split())


def sentence_count(text: str) -> int:
    clean = re.sub(r"\b(?:U\.S\.|U\.K\.|e\.g\.|i\.e\.)", lambda m: m.group(0).replace(".", ""), text)
    parts = re.split(r"(?<=[.!?])[\"'”’]?\s+", clean.strip())
    return len([part for part in parts if part.strip()])


def artifact_for(href: str) -> Path | None:
    if not href.startswith("/") or href.startswith("//"):
        return None
    clean = href.split("#", 1)[0].split("?", 1)[0].strip("/")
    if not clean:
        return ROOT / ".next/server/app/index.html"
    direct = ROOT / ".next/server/app" / f"{clean}.html"
    nested = ROOT / ".next/server/app" / clean / "index.html"
    if direct.exists():
        return direct
    if nested.exists():
        return nested
    return direct


def check_network(urls: list[str]) -> dict[str, int | str]:
    results: dict[str, int | str] = {}
    for url in urls:
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "text/html,application/pdf,*/*"})
            with urllib.request.urlopen(request, timeout=30) as response:
                response.read(256)
                results[url] = response.status
        except Exception as exc:  # pragma: no cover - network evidence
            results[url] = f"{type(exc).__name__}: {exc}"
    return results


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--network", action="store_true")
    args = parser.parse_args()

    raw = HTML_PATH.read_text(encoding="utf-8")
    parsed = TreeParser()
    parsed.feed(raw)
    nodes = list(walk(parsed.root))
    articles = [n for n in nodes if n.tag == "article" and n.attrs.get("data-article-root") == "secure-access-handoff"]
    failures: list[str] = []
    if len(articles) != 1:
        print(json.dumps({"status": "AUDIT_SELECTOR_MISMATCH", "article_roots": len(articles)}))
        return 2
    article = articles[0]
    article_nodes = list(walk(article))
    article_text = article.text()
    words = WORD.findall(article_text)

    h1 = [n.text() for n in article_nodes if n.tag == "h1"]
    banners = [n for n in article_nodes if "data-article-banner" in n.attrs]
    tables = [n for n in article_nodes if "data-rich-table" in n.attrs]
    svgs = [n for n in article_nodes if n.tag == "svg"]
    charts = [n for n in article_nodes if "data-rich-chart" in n.attrs]
    graphics = [n for n in article_nodes if "data-rich-graphic" in n.attrs]
    quotes = [n for n in article_nodes if n.tag == "blockquote" and "expert-quote" in classes(n)]
    source_sections = [n for n in article_nodes if n.attrs.get("data-numbered-sources") == "true"]
    source_items = []
    if len(source_sections) == 1:
        source_items = [n for n in walk(source_sections[0]) if n.tag == "li"]

    links = [n.attrs.get("href") or "" for n in article_nodes if n.tag == "a"]
    internal = sorted({href for href in links if href.startswith("/") and not href.startswith("//")})
    external = sorted({href for href in links if href.startswith("http://") or href.startswith("https://")})
    missing_internal = []
    for href in internal:
        artifact = artifact_for(href)
        if artifact is None or not artifact.exists():
            missing_internal.append(href)

    canonical_count = len(re.findall(r'<link rel="canonical" href="' + re.escape(CANONICAL) + r'"', raw))
    schema_types = []
    schema_errors = []
    for match in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', raw, re.S):
        try:
            schema = json.loads(match.group(1))
            schema_types.append(schema.get("@type"))
        except Exception as exc:
            schema_errors.append(str(exc))

    paragraph_checks = []
    for node in article_nodes:
        if node.tag != "p" or "lead" in classes(node):
            continue
        in_article_block = node.has_ancestor(lambda n: "article-block" in classes(n))
        excluded = node.has_ancestor(lambda n: bool(classes(n) & {"script-box", "sources-list"}) or n.tag in {"blockquote", "figure", "aside"})
        if in_article_block and not excluded:
            count = sentence_count(node.text())
            paragraph_checks.append({"text": node.text()[:90], "sentences": count})
            if count < 2 or count > 3:
                failures.append(f"paragraph sentence count {count}: {node.text()[:120]}")

    expectations = {
        "word_count_1500_2000": 1500 <= len(words) <= 2000,
        "exact_h1": h1 == [TITLE],
        "canonical": canonical_count == 1,
        "release_marker": article.attrs.get("data-release-marker") == "ova-access-handoff-20260727",
        "three_banners": len(banners) == 3 and sorted(n.attrs.get("data-article-banner") or "" for n in banners) == ["1", "2", "3"],
        "one_table": len(tables) == 1,
        "two_svgs": len(svgs) == 2,
        "one_chart": len(charts) == 1,
        "one_graphic": len(graphics) == 1,
        "one_expert_quote": len(quotes) == 1 and "Christopher Mufarrige" in quotes[0].text(),
        "six_numbered_sources": len(source_items) == 6,
        "three_internal_links": len(internal) >= 3 and not missing_internal,
        "four_external_links": len(external) >= 4,
        "dated_stats": all(marker in article_text for marker in ["$12.5 billion", "25% higher", "2.6 million", "27% in 2023", "38% in 2024", "$2.95 billion"]),
        "method_note": "Method note:" in article_text and "percentage points" in article_text,
        "philippines_only": all(marker in article_text for marker in ["Philippines-based assistant", "Filipino virtual assistant", "Philippine Data Privacy Act"]),
        "no_forbidden_commercial_copy": FORBIDDEN.search(article_text) is None,
        "no_forbidden_href": not any(href.rstrip("/").lower() == "/pricing" for href in links),
        "schemas": "BlogPosting" in schema_types and "BreadcrumbList" in schema_types and not schema_errors,
        "sitemap": f"/blog/{SLUG}" in SITEMAP_PATH.read_text(encoding="utf-8"),
        "paragraphs_2_3_sentences": not any("paragraph sentence count" in item for item in failures),
    }
    for name, passed in expectations.items():
        if not passed:
            failures.append(name)

    network = check_network(external) if args.network else None
    if network is not None:
        bad_network = {url: status for url, status in network.items() if status != 200}
        if bad_network:
            failures.append(f"source responses: {bad_network}")

    result = {
        "status": "PASS" if not failures else "FAIL",
        "slug": SLUG,
        "word_count": len(words),
        "selectors": {
            "article_root": 1,
            "banners": len(banners),
            "tables": len(tables),
            "svgs": len(svgs),
            "charts": len(charts),
            "graphics": len(graphics),
            "expert_quotes": len(quotes),
            "numbered_sources": len(source_items),
        },
        "links": {"internal_unique": len(internal), "external_unique": len(external), "missing_internal": missing_internal},
        "schema_types": schema_types,
        "paragraph_count_checked": len(paragraph_checks),
        "expectations": expectations,
        "network": network,
        "failures": failures,
    }
    print(json.dumps(result, indent=2, sort_keys=True))
    return 0 if not failures else 1


if __name__ == "__main__":
    sys.exit(main())

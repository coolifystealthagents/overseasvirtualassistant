import { blogPosts } from "../../../data";
import { BlogListing, PAGE_SIZE } from "../../blog-listing";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
export function generateStaticParams() {
  return Array.from(
    { length: Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE)) },
    (_, i) => ({ page: String(i + 1) }),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog, Page ${page}`,
    alternates: { canonical: page === "1" ? "/blog" : `/blog/page/${page}` },
  };
}
export default async function NumberedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = Number(page);
  if (n === 1) redirect("/blog");
  return <BlogListing page={n} />;
}

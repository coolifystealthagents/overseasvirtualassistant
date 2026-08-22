# Overseas Virtual Assistant topical-authority link ledger

Updated: 2026-08-22

This is an internal execution map. It only uses routes that already exist in this repository. Each row names one buyer question, the closest Philippines-based service page, and one supporting research page that can earn a contextual handoff after a page-level review. A row is not permission to add a generic card or repeat the same link on every article.

| Service pillar | Supporting research route | Reader question | Controlled next step | Status |
| --- | --- | --- | --- | --- |
| Executive assistance | `/research/executive-calendar-buffer-research` | How should an executive decide which calendar buffers and exceptions stay with them? | Audit whether the existing calendar service is specific enough; it already has a handoff to `/services/calendar-and-inbox-management`. | Existing handoff; do not duplicate. |
| Calendar and inbox management | `/research/shift-load-evidence-for-philippines-support` | What should a team record before it adds inbox work to a Philippines shift? | Review one body-level handoff to `/services/calendar-and-inbox-management` only if the article does not already give that route as its next step. | Candidate. |
| Travel and expense support | `/research/working-time-evidence-for-philippines-assistant-shifts` | What coverage window is realistic before travel changes and expense records start arriving? | Check whether travel planning and expense preparation are named before linking to `/services/travel-and-expense-support`. | Candidate. |
| Real estate virtual assistance | `/research/property-admin-escalation-evidence` | Which property requests can an assistant prepare, and which must return to the licensed or responsible owner? | Add one route-local handoff to `/services/real-estate-virtual-assistance` only if the source has no matching service path. | Candidate. |
| Ecommerce virtual assistance | `/research/ecommerce-status-reconciliation-study` | How can a store separate an order update from a refund, substitution, or delivery decision? | Add one route-local handoff to `/services/ecommerce-virtual-assistance` only after checking the rendered article for an existing relevant target. | Candidate. |
| Medical administrative assistance | `/research/privacy-boundaries-in-virtual-assistant-research-notes` | What information should stay out of a research or admin note when a task touches private records? | Audit a narrowly worded handoff to `/services/medical-administrative-assistance`; keep all clinical, privacy, and professional decisions with the owner. | Candidate. |
| Legal administrative assistance | `/research/data-minimization-for-delegated-assistant-work` | What is the smallest record set an assistant needs before preparing legal-administrative work? | Audit a narrow handoff to `/services/legal-administrative-assistance`; do not imply legal advice or document review authority. | Candidate. |
| Podcast administration | `/research/handoff-context-completeness-study` | What must be in a handoff so an editor or host can continue without rebuilding the story? | Check the article’s real examples before considering `/services/podcast-administration`; skip it if the article does not address production administration. | Candidate, evidence-fit review required. |
| Recruiting coordination | `/research/role-scope-evidence-for-virtual-assistant-hiring` | What makes a recruiting-support role clear enough to review without handing selection decisions to the assistant? | Audit one handoff to `/services/recruiting-coordination` that preserves hiring and selection authority with the owner. | Candidate. |
| Research and data support | `/research/source-quality-for-assistant-prepared-research` | What lets an owner check a research brief before using it in a decision? | Add or confirm a route-local handoff to `/services/research-and-data-support`; do not treat a source list as a guarantee. | Candidate. |

## Execution rules

1. Start with the listed supporting page, not the service page. Confirm its question, sources, and existing reader links still fit the service before editing.
2. Render a handoff only where the source gives the reader a concrete reason to consider that exact service. A generic footer, repeated card, or service-index link does not count.
3. Keep one decision per source URL. Preserve owner authority for legal, clinical, financial, privacy, hiring, and customer-commitment decisions.
4. A public change must refresh the source route’s date fields as required by its data model, pass the production build, prove the generated marker and target href, then complete the repository deployment and dual-host public check.

import type { Metadata } from 'next';
import { September3BlogArticle, september3Metadata } from '../../september3-blog-content';
const slug = 'subject-matter-expert-interview-handoff-for-va-writers';
export const metadata: Metadata = september3Metadata(slug);
export default function Page(){ return <September3BlogArticle slug={slug}/>; }

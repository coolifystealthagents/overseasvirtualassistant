import type { Metadata } from 'next';
import { September3BlogArticle, september3Metadata } from '../../september3-blog-content';
const slug = 'subject-matter-approval-queue-for-remote-writers';
export const metadata: Metadata = september3Metadata(slug);
export default function Page(){ return <September3BlogArticle slug={slug}/>; }

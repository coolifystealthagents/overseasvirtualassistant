import type { Metadata } from 'next';
import { September3BlogArticle, september3Metadata } from '../../september3-blog-content';
const slug = 'article-research-intake-boundary-for-virtual-assistants';
export const metadata: Metadata = september3Metadata(slug);
export default function Page(){ return <September3BlogArticle slug={slug}/>; }

import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('daily-article-queue-entry');
export default function Page(){return renderAug20Article('daily-article-queue-entry')}

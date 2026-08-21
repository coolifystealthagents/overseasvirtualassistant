import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('cross-time-zone-review-window');
export default function Page(){return renderAug20Article('cross-time-zone-review-window')}

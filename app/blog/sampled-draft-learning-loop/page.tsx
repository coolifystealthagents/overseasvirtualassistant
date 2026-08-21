import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('sampled-draft-learning-loop');
export default function Page(){return renderAug20Article('sampled-draft-learning-loop')}

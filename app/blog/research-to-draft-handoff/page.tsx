import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('research-to-draft-handoff');
export default function Page(){return renderAug20Article('research-to-draft-handoff')} 

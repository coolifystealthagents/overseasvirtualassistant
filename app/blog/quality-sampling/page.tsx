import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('quality-sampling');
export default function Page(){return renderAug20Article('quality-sampling')} 

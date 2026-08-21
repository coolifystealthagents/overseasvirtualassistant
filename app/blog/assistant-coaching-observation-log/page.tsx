import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('assistant-coaching-observation-log');
export default function Page(){return renderAug20Article('assistant-coaching-observation-log')}

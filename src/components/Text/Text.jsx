import { color, fontFamily, fontSize, fontWeight, truncate } from '@/utils/styled';
import style from 'styled-components';

export const Text = style.span`
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
    ${truncate}
`;

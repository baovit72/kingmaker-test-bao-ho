import { color, fontFamily, fontSize, fontWeight } from '@/utils/styled';
import style from 'styled-components';

export const Text = style.span`
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
`;

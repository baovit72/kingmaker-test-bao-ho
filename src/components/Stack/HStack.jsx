import { height, margin, padding, width } from '@/utils/styled';
import style from 'styled-components';
export const HStack = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${width}
    ${height}
    ${padding}
    ${margin}
`;

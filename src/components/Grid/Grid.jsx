import style from 'styled-components';
import { gridCol, height } from '@/utils/styled';

export const Grid = style.div`
    display: grid;
    overflow: auto;
    height: 100%;
    ${({ $gap }) => $gap}
    ${gridCol}
    ${height}
`;

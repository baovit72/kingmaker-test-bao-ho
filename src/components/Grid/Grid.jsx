import style from 'styled-components';
import { gridCol } from '@/utils/styled';

export const Grid = style.div`
    display: grid;
    ${({ $gap }) => $gap}
    ${gridCol}
`;

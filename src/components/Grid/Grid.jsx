import style from 'styled-components';
import { gridCol } from '@/utils/styled';

const Grid = style.div`
    display: grid;
    ${({ $gap }) => $gap}
    ${gridCol}
`;

export default Grid;

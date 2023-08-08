import { height, margin, padding, width } from '@/utils/styled';
import style from 'styled-components';
export const VStack = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    ${width}
    ${height}
    ${padding}
    ${margin}
`;

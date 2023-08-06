import { media } from './media';

export const gridCol = ({ theme, $col }) =>
  media(theme, $col, (value) => `grid-template-columns: repeat(${value || 1},1fr);`);

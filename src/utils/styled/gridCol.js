import media from './media';

export default ({ theme, $col }) => media(theme, $col, (value) => `grid-template-columns: repeat(${value},1fr);`);

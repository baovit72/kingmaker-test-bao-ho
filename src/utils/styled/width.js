import media from './media';

export default ({ theme, $width }) => media(theme, $width, (value) => `max-width: ${value};`);

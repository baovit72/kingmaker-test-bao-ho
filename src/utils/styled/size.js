import { media } from './media';

export const height = ({ theme, $height }) => media(theme, $height, (value) => `height: ${value || 'auto'};`);

export const width = ({ theme, $width }) => media(theme, $width, (value) => `width: ${value || 'auto'};`);

export const maxWidth = ({ theme, $maxWidth }) => media(theme, $maxWidth, (value) => `max-width: ${value || 'auto'};`);

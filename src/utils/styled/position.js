import { media } from "./media";

export const top = ({ theme, $top }) => media(theme, $top, (value) => `top: ${value};`);

export const left = ({ theme, $left }) => media(theme, $left, (value) => `left: ${value};`);

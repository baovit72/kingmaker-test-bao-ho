import { css } from 'styled-components';
import { media } from './media';

export const fontFamily = ({ theme, $fontAlias }) =>
  $fontAlias &&
  css`
    font-family: ${theme.fontFamily[$fontAlias] || 'inherit'};
  `;

export const fontWeight = ({ theme, $fontWeight }) =>
  $fontWeight &&
  css`
    font-weight: ${theme.fontWeight[$fontWeight] || 'normal'};
  `;

export const fontSize = ({ theme, $fontSize }) =>
  media(theme, $fontSize, (value) => `font-size: ${theme.fontSize[value] || 'inherit'};`);

export const color = ({ theme, $color }) =>
  $color &&
  css`
    color: ${theme.color[$color] || $color};
  `;

export const truncate = ({ $truncate }) =>
  $truncate &&
  css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    width: 100%;
  `;

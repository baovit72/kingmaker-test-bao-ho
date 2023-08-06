import { css } from 'styled-components';
import { media } from './media';

export const paddingAll = ({ theme, $padding }) =>
  $padding && media(theme, $padding, (value) => `padding: ${theme.spacing[value]};`);
export const paddingX = ({ theme, $px }) =>
  $px && media(theme, $px, (value) => `padding-left: ${theme.spacing[value]}; padding-right: ${theme.spacing[value]};`);
export const paddingY = ({ theme, $py }) =>
  $py && media(theme, $py, (value) => `padding-top: ${theme.spacing[value]}; padding-bottom: ${theme.spacing[value]};`);

export const paddingLeft = ({ theme, $pl }) =>
  $pl && media(theme, $pl, (value) => `padding-left: ${theme.spacing[value]};`);

export const paddingRight = ({ theme, $pr }) =>
  $pr && media(theme, $pr, (value) => `padding-right: ${theme.spacing[value]};`);

export const padding = (props) => css`
  ${paddingAll(props)}
  ${paddingX(props)}
  ${paddingY(props)}
  ${paddingLeft(props)}
  ${paddingRight(props)}
`;

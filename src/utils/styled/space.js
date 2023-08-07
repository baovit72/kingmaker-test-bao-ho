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

export const marginAll = ({ theme, $margin }) =>
  $margin && media(theme, $margin, (value) => `margin: ${theme.spacing[value]};`);

export const marginX = ({ theme, $mx }) =>
  $mx && media(theme, $mx, (value) => `margin-left: ${theme.spacing[value]}; margin-right: ${theme.spacing[value]};`);

export const marginY = ({ theme, $my }) =>
  $my && media(theme, $my, (value) => `margin-top: ${theme.spacing[value]}; margin-bottom: ${theme.spacing[value]};`);

export const marginLeft = ({ theme, $ml }) =>
  $ml && media(theme, $ml, (value) => `margin-left: ${theme.spacing[value]};`);

export const marginRight = ({ theme, $mr }) =>
  $mr && media(theme, $mr, (value) => `margin-right: ${theme.spacing[value]};`);

export const marginTop = ({ theme, $mt }) =>
  $mt && media(theme, $mt, (value) => `margin-top: ${theme.spacing[value]};`);

export const marginBottom = ({ theme, $mb }) =>
  $mb && media(theme, $mb, (value) => `margin-bottom: ${theme.spacing[value]};`);

export const margin = (props) => css`
  ${marginAll(props)}
  ${marginX(props)}
  ${marginY(props)}
  ${marginLeft(props)}
  ${marginRight(props)}
  ${marginTop(props)}
  ${marginBottom(props)}
`;

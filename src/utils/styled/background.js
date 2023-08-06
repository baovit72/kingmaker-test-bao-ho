import { css } from 'styled-components';

export const backgroundColor = ({ theme, $bgColor }) =>
  $bgColor &&
  css`
    background-color: ${theme.color[$bgColor] || $bgColor};
  `;

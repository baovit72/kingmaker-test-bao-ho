import { maxWidth } from '@/utils/styled';
import style from 'styled-components';

export const SliderItem = style.div`
  outline: none;
  ${maxWidth}
  min-height: 1px;
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
`;
 
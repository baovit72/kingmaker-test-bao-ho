import { width } from '@/utils/styled';
import styled from 'styled-components';

const SliderItem = styled.div`
  outline: none;
  ${width}
  min-height: 1px;
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
`;

export default SliderItem;

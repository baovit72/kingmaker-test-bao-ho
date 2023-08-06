import { maxWidth } from '@/utils/styled';
import style from 'styled-components';

const StyledContainer = style.div`
    margin: auto;
    ${maxWidth}
`;

export function Container(props) {
  return (
    <StyledContainer {...props} $maxWidth={['100%', '540px', '720px', '960px', '1140px', '1320px']}></StyledContainer>
  );
}

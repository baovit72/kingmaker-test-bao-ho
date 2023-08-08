import { width } from '@/utils/styled';
import style from 'styled-components';

const StyledContainer = style.div`
    margin: auto;
    ${width}
`;

export function Container(props) {
  return (
    <StyledContainer {...props} $width={['100%', '540px', '800px', '960px', '1140px', '1320px']}></StyledContainer>
  );
}

import { width } from '@/utils/styled';
import style from 'styled-components';

const StyledContainer = style.div`
    margin: auto;
    ${width}
`;

function Container(props) {
  return (
    <StyledContainer {...props} $width={['100%', '540px', '720px', '960px', '1140px', '1320px']}></StyledContainer>
  );
}

export default Container;

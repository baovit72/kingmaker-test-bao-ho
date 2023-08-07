import ICON_SEARCH from '@/assets/images/icons/icon_search.png';
import { Button } from '../Button';
import { styled } from 'styled-components';
import { DecorativeImage } from '../Image';
import { backgroundColor, margin } from '@/utils/styled';

const Wrapper = styled(Button)`
  position: relative;
  width: 42px;
  height: 42px;
  display: flex;
  ${backgroundColor}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${margin}
`;

export function SearchButton({ ...props }) {
  return (
    <Wrapper {...props} $bgColor={'brown'}>
      <DecorativeImage src={ICON_SEARCH} alt="search button" width="28px" height="28px" customFilter="invert(1)" />
    </Wrapper>
  );
}

import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { styled } from 'styled-components';
import ICON_KEBAB from '@/assets/images/icons/icon_menu.png';

const Wrapper = styled(Button)`
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
`;
export function KebabButton() {
  return (
    <Wrapper>
      <DecorativeImage src={ICON_KEBAB} alt="main page button" width="100%" height="100%" />
    </Wrapper>
  );
}

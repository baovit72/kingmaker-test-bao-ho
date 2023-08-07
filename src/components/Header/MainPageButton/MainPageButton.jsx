import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import ICON_BUTTON_MAINPAGE from '@/assets/images/icons/icon_home.png';
import { padding } from '@/utils/styled';
import { Text } from '@/components/Text';

const Wrapper = styled(Button)`
  position: relative;
  width: 128px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `linear-gradient(${theme.color.lightbrown}, ${theme.color.darkbrown})`};
  border-radius: ${({ theme }) => theme.spacing[2]};
  box-shadow: inset 0px -2px 6px ${({ theme }) => theme.color.lightbrown};
  ${padding};
`;
export function MainPageButton() {
  const { t } = useTranslation();
  return (
    <Wrapper $padding={2}>
      <DecorativeImage src={ICON_BUTTON_MAINPAGE} alt="main page button" width="42%" height="42%" />
      <Text $fontAlias="text" $color="black" $fontWeight="semibold" $fontSize={5} $mt={2}>
        {t('components.game.header.mainpage.text')}
      </Text>
    </Wrapper>
  );
}

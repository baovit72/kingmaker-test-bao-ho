import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import ICON_BUTTON_MAINPAGE from '@/assets/images/icons/icon_home.png';
import { height, margin, padding, width } from '@/utils/styled';
import { Text } from '@/components/Text';
import PropTypes from 'prop-types';

const Wrapper = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 128px;
  height: 128px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `linear-gradient(${theme.color.lightbrown}, ${theme.color.darkbrown})`};
  border-radius: ${({ theme }) => theme.spacing[2]};
  box-shadow: inset 0px -2px 6px ${({ theme }) => theme.color.lightbrown};
  ${padding};
  ${width}
  ${height}
  ${margin}
`;
export function MainPageButton({ width, height, fontSize, ...props }) {
  const { t } = useTranslation();
  return (
    <Wrapper $padding={1} $width={width} $height={height} {...props}>
      <DecorativeImage src={ICON_BUTTON_MAINPAGE} alt="main page button" width="42%" height="42%" />
      <Text $fontAlias="text" $color="black" $fontWeight="semibold" $fontSize={fontSize} $mt={2}>
        {t('components.game.header.mainpage.text')}
      </Text>
    </Wrapper>
  );
}

MainPageButton.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  fontSize: PropTypes.any,
};

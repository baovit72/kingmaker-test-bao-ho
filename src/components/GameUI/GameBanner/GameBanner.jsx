import { Button } from '@/components/Button';
import { DecorativeImage, Image } from '@/components/Image';
import style, { styled } from 'styled-components';
import ICON_HEART_DISABLED from '@/assets/images/icons/icon_heart_disable.png';
import ICON_HEART_ACTIVE from '@/assets/images/icons/icon_heart_active.png';
import PropTypes from 'prop-types';
import { margin } from '@/utils/styled';

const Wrapper = style.div`
  position: relative; 
  display: inline-block;
  ${margin}
`;

const FavoriteButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  width: 18%;
`;

export function GameBanner({ name, bannerUrl, isFavorite, width, ...props }) {
  const heartIcon = isFavorite ? ICON_HEART_ACTIVE : ICON_HEART_DISABLED;
  return (
    <Wrapper {...props}>
      <DecorativeImage src={bannerUrl} alt={name + ' banner'} width={width} />
      <FavoriteButton>
        <Image src={heartIcon} alt={`add ${name} to favorite button`} width="100%" />
      </FavoriteButton>
    </Wrapper>
  );
}

GameBanner.propTypes = {
  name: PropTypes.string.isRequired,
  bannerUrl: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  width: PropTypes.any,
};

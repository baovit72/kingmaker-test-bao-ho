import { Button } from '@/components/Button';
import { DecorativeImage, Image } from '@/components/Image';
import style, { styled } from 'styled-components';
import ICON_HEART_DISABLED from '@/assets/images/icons/icon_heart_disable.png';
import ICON_HEART_ACTIVE from '@/assets/images/icons/icon_heart_active.png';
import PropTypes from 'prop-types';

const Wrapper = style.div`
  position: relative;
  width: 248px;
`;

const FavoriteButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
`;

export function GameBanner({ name, bannerUrl, isFavorite }) {
  const heartIcon = isFavorite ? ICON_HEART_ACTIVE : ICON_HEART_DISABLED;
  return (
    <Wrapper>
      <DecorativeImage src={bannerUrl} alt={name + ' banner'} />
      <FavoriteButton>
        <Image src={heartIcon} alt={`add ${name} to favorite button`} width="48px" />
      </FavoriteButton>
    </Wrapper>
  );
}

GameBanner.propTypes = {
  name: PropTypes.string.isRequired,
  bannerUrl: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

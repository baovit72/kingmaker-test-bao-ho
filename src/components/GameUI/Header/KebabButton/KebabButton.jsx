import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { styled } from 'styled-components';
import ICON_KEBAB from '@/assets/images/icons/icon_menu.png';
import { height, margin, width } from '@/utils/styled';
import PropTypes from 'prop-types';

const Wrapper = styled(Button)`
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
  ${width}
  ${height}
  ${margin}
`;
export function KebabButton({ width, height, ...props }) {
  return (
    <Wrapper $width={width} $height={height} {...props}>
      <DecorativeImage src={ICON_KEBAB} alt="main page button" width="100%" height="100%" />
    </Wrapper>
  );
}

KebabButton.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
};

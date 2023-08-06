import { height, left, top, width } from '@/utils/styled';
import { styled } from 'styled-components';
import { Image } from './Image';
import PropTypes from 'prop-types';

const StyledImage = styled(Image)`
  position: absolute;
  ${left}
  ${top}
  ${width}
  ${height}
`;

export function DecoratorImage({ src, alt = '', top, left, width, height }) {
  return <StyledImage src={src} alt={alt} $top={top} $left={left} $width={width} $height={height} />;
}

DecoratorImage.propTypes = {
  ...Image.propTypes,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

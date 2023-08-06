import { height, width } from '@/utils/styled';
import PropTypes from 'prop-types';
import style from 'styled-components';

const StyledImage = style.img`
    ${width}
    ${height}
`;

export function Image({ src, alt, width = 'auto', height = 'auto', ...props }) {
  return <StyledImage src={src} alt={alt} $width={width} $height={height} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

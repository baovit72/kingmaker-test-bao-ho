import style from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from './Image';
import { height, width } from '@/utils/styled';
import { DecoratorImage } from './DecoratorImage';

const Wrapper = style.div`
    position: relative;
    filter: ${({ $customFilter }) => $customFilter || 'none'};
    ${width}
    ${height}
`;

export function DecorativeImage({ src, alt, decorators, width, height, customFilter }) {
  const decoratorImages =
    decorators && decorators.map((decorator, index) => <DecoratorImage key={index} {...decorator} alt="" />);
  return (
    <Wrapper $width={width} $height={height} $customFilter={customFilter}>
      {src && <Image src={src} alt={alt} width="100%" />}
      {decoratorImages}
    </Wrapper>
  );
}

DecorativeImage.propTypes = {
  ...Image.propTypes,
  width: PropTypes.string,
  height: PropTypes.string,
  customFilter: PropTypes.string,
  decorators: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
      top: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }),
  ),
};

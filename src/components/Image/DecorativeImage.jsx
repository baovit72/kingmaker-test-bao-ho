import style, { styled } from 'styled-components';
import PropTypes from 'prop-types'; 
import { Image } from './Image';
import { height, width } from '@/utils/styled';
import { DecoratorImage } from './DecoratorImage';

const Wrapper = style.div`
    position: relative;
    ${width}
    ${height}
`;

const MainImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export function DecorativeImage({ src, alt, decorators }) {
  const decoratorImages = decorators.map((decorator, index) => <DecoratorImage key={index} {...decorator} />);
  return (
    <Wrapper>
      <MainImage src={src} alt={alt} />
      {decoratorImages}
    </Wrapper>
  );
}

DecorativeImage.propTypes = {
  ...Image.propTypes,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
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

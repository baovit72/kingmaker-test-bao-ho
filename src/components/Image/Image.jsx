import PropTypes from 'prop-types';

export function Image({ src, alt, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

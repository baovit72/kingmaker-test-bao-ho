import { Image } from '@/components/Image';
import { left, top } from '@/utils/styled';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledImage = styled(Image)`
  position: absolute;
  ${top}
  ${left}
`;

export function AvatarFrame({ username, frameUrl, width, height }) {
  return (
    <StyledImage src={frameUrl} alt={username + ' avatar frame'} $top={0} $left={0} width={width} height={height} />
  );
}

AvatarFrame.propTypes = {
  username: PropTypes.string.isRequired,
  frameUrl: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
};

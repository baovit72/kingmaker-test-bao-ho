import { Image } from '@/components/Image';
import { left, top } from '@/utils/styled';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledImage = styled(Image)`
  position: absolute;
  ${top}
  ${left}
`;

export function AvatarFrame({ username, frameUrl }) {
  return <StyledImage src={frameUrl} alt={username + ' avatar frame'} $top={0} $left={0} width="100%" height="100%" />;
}

AvatarFrame.propTypes = {
  username: PropTypes.string.isRequired,
  frameUrl: PropTypes.string.isRequired,
};

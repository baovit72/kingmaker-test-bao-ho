import { Image } from '@/components/Image';
import style, { styled } from 'styled-components';
import { AvatarFrame } from './AvatarFrame';
import PropTypes from 'prop-types';
import { height, width } from '@/utils/styled';

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const Wrapper = style.div`
    position: relative;
    ${width}
    ${height}
`;

export function Avatar({ username, avatarUrl, hasFrame, frameUrl, size = '100px' }) {
  return (
    <Wrapper $width={size} $height={size}>
      <StyledImage src={avatarUrl} alt={username + ' avatar'} width={'100%'} height={'100%'} />
      {hasFrame && <AvatarFrame frameUrl={frameUrl} username={username} />}
    </Wrapper>
  );
}

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  hasFrame: PropTypes.bool.isRequired,
  frameUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

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

export function Avatar({ username, avatarUrl, hasFrame, frameUrl, height = 'auto', width = 'auto' }) {
  return (
    <Wrapper $width={width} $height={height}>
      <StyledImage src={avatarUrl} alt={username + ' avatar'} width={width} height={height} />
      {hasFrame && <AvatarFrame frameUrl={frameUrl} username={username} width={width} height={height} />}
    </Wrapper>
  );
}

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  hasFrame: PropTypes.bool.isRequired,
  frameUrl: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
};

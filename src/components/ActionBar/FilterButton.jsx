import { styled } from 'styled-components';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import { DecorativeImage } from '../Image';

const Wrapper = styled(Button)`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
`;

export function FilterButton({ icon, active, ...props }) {
  const imageFilter = active
    ? 'invert(55%) sepia(26%) saturate(1245%) hue-rotate(2deg) brightness(93%) contrast(87%)'
    : 'invert(1)';
  return (
    <Wrapper {...props} $active={active}>
      <DecorativeImage src={icon} alt="search button" width="100%" height="100%" customFilter={imageFilter} />
    </Wrapper>
  );
}

FilterButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

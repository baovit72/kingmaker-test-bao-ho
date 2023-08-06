import PropTypes from 'prop-types';
import { SliderList } from './SliderList';
import { SliderTrack } from './SliderTrack';
import { SliderWrapper } from './SliderWrapper';

export function Slider({ children }) {
  //Simple version of Slider
  return (
    <SliderWrapper>
      <SliderTrack>
        <SliderList>{children}</SliderList>
      </SliderTrack>
    </SliderWrapper>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

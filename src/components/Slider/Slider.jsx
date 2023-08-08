import PropTypes from 'prop-types';
import { SliderWrapper } from './SliderWrapper';

export function Slider({ children }) {
  //Simple version of Slider
  return <SliderWrapper>{children}</SliderWrapper>;
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

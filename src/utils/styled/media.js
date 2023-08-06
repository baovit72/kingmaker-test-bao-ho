import { css } from 'styled-components';

export default ({ breakpoints }, value, generator) => {
  let responsiveStyle = '';
  if (Array.isArray(value) && value.length) {
    const brLabels = Object.keys(breakpoints);
    const styles = value.slice(1).map((value, index) => {
      const style = generator(value);
      const brLabel = brLabels[index];
      const brValue = breakpoints[brLabel];
      return css`
        @media (min-width: ${brValue}) {
          ${style};
        }
      `;
    });
    responsiveStyle = [generator(value[0]), styles];
  } else {
    responsiveStyle = generator(value);
  }

  return css`
    ${responsiveStyle}
  `;
};

import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '@/components/Text';
import { RedDot } from '../../RedDot';
import { RedDotWrapper } from '../../RedDot/RedDotWrapper';
import { width } from '@/utils/styled';

const Wrapper = styled(Button)`
  position: relative;
  width: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${width}
`;

export function FooterButton({ icon, text, isHighlighted, width, fontSize }) {
  return (
    <Wrapper $width={width}>
      <DecorativeImage src={icon} alt={text} width="82%" />
      <Text $fontAlias="text" $color="white" $fontWeight="semibold" $fontSize={fontSize} $truncate>
        {text}
      </Text>
      {isHighlighted && (
        <RedDotWrapper $left="70%" $top="10%">
          {<RedDot />}
        </RedDotWrapper>
      )}
    </Wrapper>
  );
}

FooterButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  width: PropTypes.any,
  fontSize: PropTypes.any,
};

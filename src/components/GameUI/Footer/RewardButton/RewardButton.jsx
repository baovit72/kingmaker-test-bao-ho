import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { styled } from 'styled-components';
import ICON_REWARD_TEXT from '@/assets/images/icons/icon_reward_text.png';
import ICON_REWARD from '@/assets/images/icons/icon_reward.png';
import DECORATOR_GEM from '@/assets/images/decorators/decorator_gem.png';
import PropTypes from 'prop-types';
import { RedDotWrapper } from '../../RedDot/RedDotWrapper';
import { RedDot } from '../../RedDot';
import { width } from '@/utils/styled';

const Wrapper = styled(Button)`
  position: relative;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${width}
`;

export function RewardButton({ isHiglighted, width, height }) {
  return (
    <Wrapper $width={width || '256px'}>
      <DecorativeImage
        src={''}
        alt={'reward button'}
        width="100%"
        height={height || '256px'}
        decorators={[
          {
            src: ICON_REWARD,
            width: '50%',
            top: '0',
            left: '25%',
          },
          {
            src: DECORATOR_GEM,
            width: '82%',
            top: '10%',
            left: '9%',
          },
          {
            src: ICON_REWARD_TEXT,
            width: '100%',
            top: '20%',
            left: '0',
          },
        ]}
      />
      {isHiglighted && (
        <RedDotWrapper $left="62%" $top="10%">
          <RedDot />
        </RedDotWrapper>
      )}
    </Wrapper>
  );
}

RewardButton.propTypes = {
  isHiglighted: PropTypes.bool,
  width: PropTypes.any,
  height: PropTypes.any,
};

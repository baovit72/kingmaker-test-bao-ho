import { Button } from '@/components/Button';
import { DecorativeImage } from '@/components/Image';
import { styled } from 'styled-components';
import ICON_REWARD_TEXT from '@/assets/images/icons/icon_reward_text.png';
import ICON_REWARD from '@/assets/images/icons/icon_reward.png';
import DECORATOR_GEM from '@/assets/images/decorators/decorator_gem.png';
import PropTypes from 'prop-types';
import { RedDotWrapper } from '../../RedDot/RedDotWrapper';
import { RedDot } from '../../RedDot';

const Wrapper = styled(Button)`
  position: relative;
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function RewardButton({ isHiglighted }) {
  return (
    <Wrapper>
      <DecorativeImage
        src={''}
        alt={'reward button'}
        width="100%"
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
            top: '64%',
            left: '9%',
          },
          {
            src: ICON_REWARD_TEXT,
            width: '100%',
            top: '272%',
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
};

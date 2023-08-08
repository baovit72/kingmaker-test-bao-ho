import { DecorativeImage } from '@/components/Image';
import style, { styled } from 'styled-components';
import BG_BUTTON_TRANSACTION from '@/assets/images/backgrounds/bg_mb_button_transaction.png';
import { useTranslation } from 'react-i18next';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { height, width } from '@/utils/styled';
import PropTypes from 'prop-types';
import DECORATOR_PIG from '@/assets/images/decorators/decorator_pig.png';
import DECORATOR_PIGCOIN from '@/assets/images/decorators/decorator_pigcoin.png';

const Wrapper = styled(Button)`
  position: relative;
  width: 256px;
  ${width}
  ${height}
`;

const TextGroup = style.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    right: 12%;
    transform: translateY(-62%);
`;

export function MobileTransactionButton({ width, height, fontSize }) {
  const { t } = useTranslation();
  return (
    <Wrapper $width={width} $height={height}>
      <DecorativeImage
        src={BG_BUTTON_TRANSACTION}
        alt="deposit withdraw button"
        width="100%"
        height="100%"
        decorators={[
          {
            src: DECORATOR_PIGCOIN,
            top: '-12%',
            left: '-5%',
            width: '32%',
            height: 'auto',
          },
          {
            src: DECORATOR_PIG,
            top: '-9%',
            left: '0',
            width: '24%',
            height: 'auto',
          },
        ]}
      />
      <TextGroup>
        <Text $fontAlias="text" $color="white" $fontWeight="normal" $fontSize={fontSize || 3}>
          {t('components.game.header.transaction.deposit.text')} /
          {t('components.game.header.transaction.withdrawal.text')}
        </Text>
      </TextGroup>
    </Wrapper>
  );
}

MobileTransactionButton.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  fontSize: PropTypes.any,
};

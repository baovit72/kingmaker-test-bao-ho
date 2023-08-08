import { DecorativeImage } from '@/components/Image';
import style, { styled } from 'styled-components';
import BG_BUTTON_TRANSACTION from '@/assets/images/backgrounds/bg_button_transaction.png';
import { useTranslation } from 'react-i18next';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { height, width } from '@/utils/styled';
import PropTypes from 'prop-types';

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
    left: 20%;
    transform: translateY(-62%);
`;

const Hr = style.div`
    background: ${({ theme }) => theme.color.lightbrown};
    width: 50%;
    height: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`;

export function TransactionButton({ width, height, fontSize }) {
  const { t } = useTranslation();
  return (
    <Wrapper $width={width} $height={height}>
      <DecorativeImage src={BG_BUTTON_TRANSACTION} alt="deposit withdraw button" width="100%" height="100%" />
      <TextGroup>
        <Text $fontAlias="text" $color="white" $fontWeight="normal" $fontSize={fontSize || 3}>
          {t('components.game.header.transaction.deposit.text')}
        </Text>
        <Hr />
        <Text $fontAlias="text" $color="white" $fontWeight="normal" $fontSize={fontSize || 3}>
          {t('components.game.header.transaction.withdrawal.text')}
        </Text>
      </TextGroup>
    </Wrapper>
  );
}

TransactionButton.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  fontSize: PropTypes.any,
};

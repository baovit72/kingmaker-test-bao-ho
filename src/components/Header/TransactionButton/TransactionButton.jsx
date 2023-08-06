import { DecorativeImage } from '@/components/Image';
import style from 'styled-components';
import BG_BUTTON_TRANSACTION from '@/assets/images/backgrounds/bg_button_transaction.png';
import { useTranslation } from 'react-i18next';
import { Text } from '@/components/Text';

const Wrapper = style.div`
    position: relative;
    width: 256px; 
`;

const TextGroup = style.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 20%;
    transform: translateY(-65%);
`;

const Hr = style.div`
    background: ${({ theme }) => theme.color.lightbrown};
    width: 50%;
    height: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`;

export function TransactionButton() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <DecorativeImage src={BG_BUTTON_TRANSACTION} alt="deposit withdraw button" width="100%" height="100%" />
      <TextGroup>
        <Text $fontAlias="text" $color="white" $fontWeight="normal" $fontSize={3}>
          {t('components.game.header.transaction.deposit.text')}
        </Text>
        <Hr />
        <Text $fontAlias="text" $color="white" $fontWeight="normal" $fontSize={3}>
          {t('components.game.header.transaction.withdrawal.text')}
        </Text>
      </TextGroup>
    </Wrapper>
  );
}

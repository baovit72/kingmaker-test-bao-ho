import { Text } from '@/components/Text';
import { backgroundColor, padding, width } from '@/utils/styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import style from 'styled-components';

const Wrapper = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    box-sizing: border-box;
    ${padding}
    ${backgroundColor}
    ${width}
`;
export function Bet({ count, max, ...props }) {
  const { t } = useTranslation();
  return (
    <Wrapper $py={1} $px={2} $bgColor="black" {...props}>
      <Text $fontAlias="text" $fontSize={2} $color="white" $fontWeight="regular">
        {`${count} / ${max} ${t('components.user.bet.text')}`}
      </Text>
    </Wrapper>
  );
}

Bet.propTypes = {
  count: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

import { Text } from '@/components/Text';
import { formatCurrency } from '@/utils/format';
import style, { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledText = styled(Text)`
  text-shadow: 1px 1px 2px ${({ theme }) => theme.color.lightbrown};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.darkbrown};
`;

export function Jackpot({ amount, unit }) {
  return (
    <Wrapper>
      <StyledText $fontAlias="text" $fontSize={7} $color="white" $fontWeight="semibold">
        {formatCurrency(amount)}
      </StyledText>
      <StyledText $fontAlias="text" $fontSize={4} $color="white" $fontWeight="semibold">
        {unit}
      </StyledText>
    </Wrapper>
  );
}

Jackpot.propTypes = {
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

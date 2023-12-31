import { Image } from '@/components/Image';
import { Text } from '@/components/Text';
import { padding, height, width, backgroundColor, margin } from '@/utils/styled';
import style from 'styled-components';
import PropTypes from 'prop-types';
import { formatCurrency } from '@/utils/format';

const Wrapper = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    ${padding}
    ${width}
    ${height}
    ${backgroundColor}
    ${margin}
`;

export function Currency({ icon, value, name, width, height, ...props }) {
  return (
    <Wrapper $width={width} $height={height} $py={1} $pl={1} $pr={2} $bgColor="black" {...props}>
      <Image src={icon} alt={name + ' currency icon'} height="100%" />
      <Text $fontAlias="text" $fontSize={4} $color="white" $fontWeight="regular">
        {formatCurrency(value)}
      </Text>
    </Wrapper>
  );
}

Currency.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
};

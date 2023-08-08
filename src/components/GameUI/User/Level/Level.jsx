import { Text } from '@/components/Text';
import { backgroundColor, margin, padding } from '@/utils/styled';
import style from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    ${padding}
    ${backgroundColor}
    ${margin}
`;

export function Level({ value, ...props }) {
  return (
    <Wrapper $py={1} $px={2} $bgColor="black" {...props}>
      <Text $fontAlias="text" $fontSize={2} $color="white" $fontWeight="regular">
        Lv.{value}
      </Text>
    </Wrapper>
  );
}

Level.propTypes = {
  value: PropTypes.number.isRequired,
};

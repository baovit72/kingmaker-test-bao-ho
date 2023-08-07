import { Text } from '@/components/Text';
import { backgroundColor, padding } from '@/utils/styled';
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
`;

export function Level({ value }) {
  return (
    <Wrapper $py={1} $px={2} $bgColor="black">
      <Text $fontAlias="text" $fontSize={2} $color="white" $fontWeight="regular">
        Lv.{value}
      </Text>
    </Wrapper>
  );
}

Level.propTypes = {
  value: PropTypes.number.isRequired,
};

import { Text } from '@/components/Text';
import PropTypes from 'prop-types';

export function Username({ username }) {
  return (
    <Text $fontAlias="text" $fontSize={3} $color="black" $fontWeight="bold" $truncate>
      {username}
    </Text>
  );
}

Username.propTypes = {
  username: PropTypes.string.isRequired,
};

import ICON_DIAMOND from '@/assets/images/icons/icon_diamond.png';
import PropTypes from 'prop-types';
import { Currency } from './Currency';

export function DiamondAmount({ amount }) {
  return <Currency icon={ICON_DIAMOND} name="coin" value={amount} width="128px" height="1.2rem" />;
}

DiamondAmount.propTypes = {
  amount: PropTypes.number.isRequired,
};

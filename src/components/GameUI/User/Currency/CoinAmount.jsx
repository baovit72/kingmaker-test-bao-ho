import ICON_COIN from '@/assets/images/icons/icon_coin.png';
import PropTypes from 'prop-types';
import { Currency } from './Currency';

export function CoinAmount({ amount }) {
  return <Currency icon={ICON_COIN} name="coin" value={amount} width="156px" height="1.5rem" />;
}

CoinAmount.propTypes = {
  amount: PropTypes.number.isRequired,
};

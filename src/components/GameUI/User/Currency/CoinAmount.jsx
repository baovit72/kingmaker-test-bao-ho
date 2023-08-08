import ICON_COIN from '@/assets/images/icons/icon_coin.png';
import PropTypes from 'prop-types';
import { Currency } from './Currency';

export function CoinAmount({ amount, width, height, ...props }) {
  return <Currency icon={ICON_COIN} name="coin" value={amount} width={width || '128px'} height={height || '1.2rem'} {...props} />;
}

CoinAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
};

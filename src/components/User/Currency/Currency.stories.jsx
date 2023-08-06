import { CoinAmount } from './CoinAmount';
import { Currency } from './Currency';
import { DiamondAmount } from './DiamondAmount';

export default {
  title: 'User/Currency',
  component: Currency,
};

export const Default = () => <DiamondAmount amount={20200}/>;
export const Coin = () => <CoinAmount amount={20200}/>;

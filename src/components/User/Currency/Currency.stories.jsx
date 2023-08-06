import { Currency } from './Currency';
import ICON_COIN from '@/assets/images/icons/icon_coin.png';

export default {
  title: 'Currency',
  component: Currency,
};

export const Default = () => <Currency icon={ICON_COIN} name="coin" value={2000} width="156px" height='1.5rem'/>;

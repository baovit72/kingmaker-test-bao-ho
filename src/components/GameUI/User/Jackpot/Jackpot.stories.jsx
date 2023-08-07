import { Jackpot } from './Jackpot';

export default {
  title: 'User/Jackpot',
  component: Jackpot,
};

export const Default = () => <Jackpot amount={20000} unit="THB" />;

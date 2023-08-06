import { Bet } from './Bet';

export default {
  title: 'Bet',
  component: Bet,
};

export const Default = () => <Bet count={2} max={10} />;

import { Bet } from './Bet';

export default {
  title: 'User/Bet',
  component: Bet,
};

export const Default = () => <Bet count={2} max={10} />;

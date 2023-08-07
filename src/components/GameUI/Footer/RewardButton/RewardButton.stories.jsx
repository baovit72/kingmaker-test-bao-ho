import { RewardButton } from './RewardButton';
export default {
  title: 'Footer/Reward Button',
  component: RewardButton,
};
export const Default = () => <RewardButton></RewardButton>;
export const WithRedDot = () => <RewardButton isHiglighted></RewardButton>;

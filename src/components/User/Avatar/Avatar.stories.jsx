import { Avatar } from './Avatar';
import MOCK_AVATAR from '@/assets/images/avatars/avatar.png';
import MOCK_FRAME from '@/assets/images/avatar_frames/avatar_frame_silver.png';

export default {
  title: 'User Avatar',
  component: Avatar,
};

export const Default = () => (
  <Avatar avatarUrl={MOCK_AVATAR} username={'mock12345'} hasFrame={true} frameUrl={MOCK_FRAME} size="200px" />
);

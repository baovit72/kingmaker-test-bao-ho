import { GameBanner } from './GameBanner';
import BANNER_GAME from '@/assets/images/banners/banner_7up_7down.png';

export default {
  title: 'Game Banner',
  component: GameBanner,
};
export const Default = () => <GameBanner bannerUrl={BANNER_GAME} name="7up_7down" isFavorite={false}></GameBanner>;

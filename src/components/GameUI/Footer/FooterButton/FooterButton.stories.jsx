import { FooterButton } from './FooterButton';
import ICON_FOOTER_BUTTON from '@/assets/images/icons/icon_ranking_soon.png';

export default {
  title: 'Footer/Footer Button',
  component: FooterButton,
};
export const Default = () => <FooterButton icon={ICON_FOOTER_BUTTON} text="Ranking"></FooterButton>;
export const WithRedDot = () => <FooterButton icon={ICON_FOOTER_BUTTON} text="Ranking" isHighlighted></FooterButton>;

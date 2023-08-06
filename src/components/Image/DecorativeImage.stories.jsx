import { DecorativeImage } from './DecorativeImage';
import BG_TRANSACTION from '@/assets/images/backgrounds/bg_mb_button_deposit.png';
import BG_PIG from '@/assets/images/decorators/decorator_pig.png';
import BG_PIGCOIN from '@/assets/images/decorators/decorator_pigcoin.png';

export default {
  title: 'Decorative Image',
  component: DecorativeImage,
};

export const Default = () => (
  <DecorativeImage
    src={BG_TRANSACTION}
    alt="Transaction button"
    $width="100px"
    $height="auto"
    decorators={[
      {
        src: BG_PIGCOIN,
        height: '80%',
        width: 'auto',
        top: '5%',
        left: '2%',
      },
      {
        src: BG_PIG,
        height: '80%',
        width: 'auto',
        top: '5%',
        left: '7%',
      },
    ]}
  />
);

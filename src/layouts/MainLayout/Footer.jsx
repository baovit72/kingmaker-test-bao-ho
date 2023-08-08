import style, { styled } from 'styled-components';
import BG_FOOTER from '@/assets/images/backgrounds/bg_footer.png';
import { height, padding } from '@/utils/styled';
import { Image } from '@/components/Image';
import { Container } from '@/components/Container';
import { RewardButton } from '@/components/GameUI/Footer/RewardButton';
import ICON_SHOP from '@/assets/images/icons/icon_shop.png';
import ICON_MISSION from '@/assets/images/icons/icon_flag.png';
import ICON_MINI_GAME from '@/assets/images/icons/icon_controller.png';
import ICON_NEWS from '@/assets/images/icons/icon_update.png';
import ICON_INBOX from '@/assets/images/icons/icon_mail.png';
import ICON_RANKING from '@/assets/images/icons/icon_ranking_soon.png';
import { FooterButton } from '@/components/GameUI/Footer/FooterButton';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectRedDot } from '@/store/selectors';

const Wrapper = style.div`
  position: relative;
  overflow: hidden;
  align-items: center;
  ${height}
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const RewardButtonWrapper = style.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 4%);
`;

const StyledContainer = styled(Container)`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  ${padding}
`;

const LeftSection = style.div`
   height: 72%;
   display: flex;
   align-items: center;
   position: absolute; 
   top: 50%;
   transform: translateY(-46%);
   width: 36%;
   left:0;
   justify-content: space-around;
`;

const RightSection = style.div`
   height: 72%;
   display: flex;
   align-items: center;
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-46%);
   width: 36%;
   justify-content: space-around;
`;

export function Footer() {
  const { t } = useTranslation();

  const redDot = useSelector(selectRedDot) || {};

  const leftSectionData = [
    {
      name: 'kmshop',
      icon: ICON_SHOP,
    },
    {
      name: 'mission',
      icon: ICON_MISSION,
    },
    {
      name: 'minigame',
      icon: ICON_MINI_GAME,
    },
  ];

  const rightSectionData = [
    {
      name: 'news',
      icon: ICON_NEWS,
    },
    {
      name: 'inbox',
      icon: ICON_INBOX,
    },
    {
      name: 'ranking',
      icon: ICON_RANKING,
    },
  ];

  const renderFooterItem = ({ name, icon }) => {
    return (
      <FooterButton
        width={['96px', '96px', '96px', '138px']}
        $fontSize={[2, 2, 2, 3, 4]}
        icon={icon}
        text={t(`components.game.footer.${name}.text`)}
        isHighlighted={redDot[name]}
      />
    );
  };

  return (
    <Wrapper $height={['48px', '64px', '96px', '132px', '172px']}>
      <BackgroundImage src={BG_FOOTER} alt="footer background" width="auto" height="100%" />
      <StyledContainer $py={3} $px={3}>
        <LeftSection>{leftSectionData.map(renderFooterItem)}</LeftSection>
        <RewardButtonWrapper>
          <RewardButton
            isHiglighted={redDot['rewards']}
            width={['256px', '128px', '128px', '240px', '320px']}
            height={['256px', '128px', '128px', '240px', '320px']}
          />
        </RewardButtonWrapper>
        <RightSection>{rightSectionData.map(renderFooterItem)}</RightSection>
      </StyledContainer>
    </Wrapper>
  );
}

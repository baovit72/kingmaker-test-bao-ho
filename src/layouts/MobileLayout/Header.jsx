import { Container } from '@/components/Container';
import { Avatar } from '@/components/GameUI/User/Avatar';
import {
  selectAvatar,
  selectAvatarFrame,
  selectBets,
  selectCoin,
  selectCurrentJackpot,
  selectDiamond,
  selectHasFrame,
  selectLevel,
  selectUsername,
} from '@/store/selectors';
import { useSelector } from 'react-redux';
import style, { styled } from 'styled-components';
import BG_HEADER from '@/assets/images/backgrounds/bg_header.png';
import BG_USERINFO from '@/assets/images/backgrounds/bg_mb_user_info.png';
import { Username } from '@/components/GameUI/User/Username';
import { backgroundColor, height, padding, width } from '@/utils/styled';
import { DecorativeImage, Image } from '@/components/Image';
import { HStack, VStack } from '@/components/Stack';
import { Level } from '@/components/GameUI/User/Level';
import { Bet } from '@/components/GameUI/User/Bet/Bet';
import { CoinAmount } from '@/components/GameUI/User/Currency/CoinAmount';
import { DiamondAmount } from '@/components/GameUI/User/Currency/DiamondAmount';
import { Jackpot } from '@/components/GameUI/User/Jackpot';
import { MainPageButton } from '@/components/GameUI/Header/MainPageButton';
import { KebabButton } from '@/components/GameUI/Header/KebabButton';
import { MobileTransactionButton } from '@/components/GameUI/Header/TransactionButton';

const HeaderSection = style.div`
  position: relative;
  overflow: hidden;
  align-items: center;
  width: 100%;
  ${height}
  ${backgroundColor}
  box-shadow: inset 0px -1px 15px -4px ${({ theme }) => theme.color.lightbrown};
`;

const StyledContainer = styled(Container)`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${padding}
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const JackpotWrapper = style.div`
  position: absolute;
  left: 50%;
  bottom: 7%;
  transform: translateX(-50%);
`;

const LeftSection = style.div`
   height: 72%;
   display: flex;
   align-items: center;  
   ${width}
`;

const RightSection = style.div`
   height: 72%; 
   display: flex;
   align-items: center;   
   justify-content: flex-end;
   ${width}
`;

const UserGroup = style.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserInfo = style.div`
  position:absolute;
  display: flex;
  top:0;
  left: 0;
  height: 86%;
  ${padding}
`;

export function Header() {
  const avatarUrl = useSelector(selectAvatar) || '';
  const frameUrl = useSelector(selectAvatarFrame) || '';
  const hasFrame = useSelector(selectHasFrame) || false;
  const username = useSelector(selectUsername) || '';
  const level = useSelector(selectLevel) || 1;
  const coins = useSelector(selectCoin) || 0;
  const diamonds = useSelector(selectDiamond) || 0;
  const bet = useSelector(selectBets) || 0;
  const jackpot = useSelector(selectCurrentJackpot) || 0;

  return (
    <VStack>
      <HeaderSection $height={['82px', '82px', '96px']}>
        <BackgroundImage src={BG_HEADER} alt="header background" width="auto" height="100%" />
        <StyledContainer $py={3} $px={3}>
          <LeftSection $width="32%">
            <VStack $height={'100%'} $width="100%">
              <CoinAmount amount={coins} height={['18px', '18px', '18px', '24px', '28px']} width={'100%'} $mb={2} />
              <DiamondAmount amount={diamonds} height={['18px', '18px', '18px', '24px', '28px']} width={'100%'} />
            </VStack>
          </LeftSection>
          <RightSection $width="32%">
            <MainPageButton
              $ml={3}
              width={['48px', '48px', '52px', '58px', '72px']}
              height={['48px', '48px', '52px', '58px', '72px']}
              fontSize={[1, 1, 1, 2, 3]}
            />
            <KebabButton $ml={3} width={['24px', '24px', '28px', '32px']} height={['24px', '24px', '28px', '32px']} />
          </RightSection>
          <JackpotWrapper>
            <Jackpot amount={jackpot} unit="THB" />
          </JackpotWrapper>
        </StyledContainer>
      </HeaderSection>
      <HeaderSection $height={['82px', '82px', '96px']} $bgColor="darkbg">
        <StyledContainer $py={3} $px={3}>
          <LeftSection $width={['48%', '42%']}>
            <UserGroup>
              <DecorativeImage src={BG_USERINFO} alt={username + ' info background'}></DecorativeImage>
              <UserInfo $pl={2}>
                <Avatar
                  avatarUrl={avatarUrl}
                  hasFrame={hasFrame}
                  frameUrl={frameUrl}
                  username={username}
                  height="100%"
                  width="auto"
                />
                <VStack $ml={3} $height={'100%'}>
                  <HStack>
                    <Level value={level} $mr={[1, 3, 4, 4]} $bgColor="transparent" />
                    <Username username={username} />
                  </HStack>
                  <Bet count={bet.current || 0} max={bet.max || 0} $width={'100%'} $bgColor="transparent" />
                </VStack>
              </UserInfo>
            </UserGroup>
          </LeftSection>
          <RightSection $width={['48%', '42%']}>
            <MobileTransactionButton fontSize={[3, 4, 5]} width={'100%'} />
          </RightSection>
        </StyledContainer>
      </HeaderSection>
    </VStack>
  );
}

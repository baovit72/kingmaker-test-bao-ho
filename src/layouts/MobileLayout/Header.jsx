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
import { Username } from '@/components/GameUI/User/Username';
import { height, padding } from '@/utils/styled';
import { Image } from '@/components/Image';
import { HStack, VStack } from '@/components/Stack';
import { Level } from '@/components/GameUI/User/Level';
import { Bet } from '@/components/GameUI/User/Bet/Bet';
import { CoinAmount } from '@/components/GameUI/User/Currency/CoinAmount';
import { DiamondAmount } from '@/components/GameUI/User/Currency/DiamondAmount';
import { Jackpot } from '@/components/GameUI/User/Jackpot';
import { TransactionButton } from '@/components/GameUI/Header/TransactionButton';
import { MainPageButton } from '@/components/GameUI/Header/MainPageButton';
import { KebabButton } from '@/components/GameUI/Header/KebabButton';

const Wrapper = style.div`
  position: relative;
  overflow: hidden;
  align-items: center;
  ${height}
`;

const StyledContainer = styled(Container)`
  height: 100%;
  box-sizing: border-box;
  position: relative;
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
   position: absolute;
   left: 2%;
   top: 50%;
   transform: translateY(-50%);
`;

const RightSection = style.div`
   height: 72%;
   display: flex;
   align-items: center;
   position: absolute;
   right: 2%;
   top: 50%;
   transform: translateY(-50%);
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
    <Wrapper $height={['48px', '64px', '72px', '96px', '132px']}>
      <BackgroundImage src={BG_HEADER} alt="header background" width="auto" height="100%" />
      <StyledContainer $py={3} $px={3}>
        <LeftSection>
          <Avatar
            avatarUrl={avatarUrl}
            hasFrame={hasFrame}
            frameUrl={frameUrl}
            username={username}
            height="100%"
            width="auto"
          />
          <VStack $ml={2} $height={'100%'} $mr={3}>
            <HStack>
              <Level value={level} />
              <Username username={username} />
            </HStack>
            <Bet count={bet.current || 0} max={bet.max || 0} $width={'100%'} />
          </VStack>
          <VStack $height={'100%'}>
            <CoinAmount
              amount={coins}
              height={['18px', '18px', '18px', '24px', '28px']}
              width={['18px', '18px', '96px', '128px', '172px']}
            />
            <DiamondAmount
              amount={diamonds}
              height={['18px', '18px', '18px', '24px', '28px']}
              width={['18px', '18px', '96px', '128px', '172px']}
            />
          </VStack>
        </LeftSection>
        <RightSection>
          <TransactionButton fontSize={[2, 2, 2, 2, 4]} width={['72px', '92px', '148px', '164px', '198px']} />
          <MainPageButton
            $ml={3}
            width={['48px', '48px', '52px', '58px', '72px']}
            height={['48px', '48px', '52px', '58px', '72px']}
            fontSize={[1, 1, 1, 2, 3]}
          />
          <KebabButton $ml={3} width={['18px', '24px', '28px', '32px']} height={['18px', '24px', '28px', '32px']} />
        </RightSection>
        <JackpotWrapper>
          <Jackpot amount={jackpot} unit="THB" />
        </JackpotWrapper>
      </StyledContainer>
    </Wrapper>
  );
}

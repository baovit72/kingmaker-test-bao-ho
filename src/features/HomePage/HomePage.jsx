import { ActionBar } from '@/components/GameUI/ActionBar/ActionBar';
import { GameBanner } from '@/components/GameUI/GameBanner';
import Head from '@/components/Head/Head';
import { Image } from '@/components/Image';
import { Slider } from '@/components/Slider';
import { selectGameList } from '@/store/selectors';
import { margin } from '@/utils/styled';
import { useSelector } from 'react-redux';
import style, { styled } from 'styled-components';
import BG_HOME from '@/assets/images/backgrounds/bg_home.png';

const Wrapper = style.div`
  position: relative;
  height: 100%;
  padding-top: 1rem;
`;

const ActionBarWrapper = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${margin}
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export function HomePage() {
  const gameList = useSelector(selectGameList);
  const gameCards = gameList.map(({ name, image, isFavorite }) => {
    return (
      <GameBanner
        $mx={2}
        key={name}
        bannerUrl={image}
        name={name}
        isFavorite={isFavorite}
        width={['172px', '172px', '96px', '136px', '172px']}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    );
  });

  return (
    <Wrapper $pt={2}>
      <Head title="Game List" />
      <BackgroundImage src={BG_HOME} alt="home page background" />
      <ActionBarWrapper $mb={3}>
        <ActionBar />
      </ActionBarWrapper>
      <Slider>{gameCards}</Slider>
    </Wrapper>
  );
}

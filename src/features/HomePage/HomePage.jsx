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
import useMobile from '@/hooks/useMobile';
import { Grid } from '@/components/Grid';

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

const BannerGridItem = style.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GridWrapper = style.div``;

export function HomePage() {
  const gameList = useSelector(selectGameList);
  const isMobile = useMobile();

  const renderMobileCard = ({ name, image, isFavorite }) => {
    return (
      <BannerGridItem key={name}>
        <GameBanner
          $mx={2}
          bannerUrl={image}
          name={name}
          isFavorite={isFavorite}
          width={['112px', '132px', '142px']}
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </BannerGridItem>
    );
  };

  const renderDesktopCard = ({ name, image, isFavorite }) => {
    return (
      <GameBanner
        key={name}
        $mx={2}
        bannerUrl={image}
        name={name}
        isFavorite={isFavorite}
        width={['90%', '90%', '112px', '136px', '172px']}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    );
  };

  const gameCards = gameList.map((data) => (isMobile ? renderMobileCard(data) : renderDesktopCard(data)));

  const bannerList = isMobile ? (
    <GridWrapper>
      <Grid $col={[2, 2, 3]}>{gameCards.slice(0,2)}</Grid>
    </GridWrapper>
  ) : (
    <Slider>{gameCards}</Slider>
  );

  return (
    <Wrapper $pt={2}>
      <Head title="Game List" />
      <BackgroundImage src={BG_HOME} alt="home page background" />
      <ActionBarWrapper $mb={3}>
        <ActionBar />
      </ActionBarWrapper>
      {bannerList}
    </Wrapper>
  );
}

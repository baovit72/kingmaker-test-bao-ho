import style, { styled } from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import PropTypes from 'prop-types';
import BG_MAIN from '@/assets/images/backgrounds/bg_main.jpg';
import { Container } from '@/components/Container';

const Wrapper = style.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh; 
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    background-image: url(${BG_MAIN});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `;

const GameView = styled(Container)`
  display: flex;
  flex-direction: column;
  max-height: 800px;
  border-radius: 12px;
  overflow: hidden;
`;

const ChildrenWrapper = style.div`  
    width: 100%;
`;

export function MainLayout({ children }) {
  return (
    <Wrapper>
      <GameView>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <Footer />
      </GameView>
    </Wrapper>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

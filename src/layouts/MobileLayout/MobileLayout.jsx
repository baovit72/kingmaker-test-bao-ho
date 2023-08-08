import style, { styled } from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import PropTypes from 'prop-types';
import { height } from '@/utils/styled';

const Wrapper = style.div` 
    width: 100vw;
    height: 100vh; 
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    z-index: 0;
  `;

const GameView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const ChildrenWrapper = style.div`  
    width: 100%;
    flex: 1; 
    ${height}
`;

export function MobileLayout({ children }) {
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

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '@/components/Loading';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/store/configureStore';

const ErrorFallback = () => {
  return (
    <Button onClick={() => window.location.assign(window.location.origin)}>
      <Text $fontAlias="text" $fontWeight="bold" $fontSize={5} $color="brown">
        Refresh
      </Text>
    </Button>
  );
};

function AppProvider({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <ReduxProvider store={store}>
              <Router>{children}</Router>
            </ReduxProvider>
          </ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

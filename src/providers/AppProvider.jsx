import { Button } from '@/components/Elements/Button';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import PropTypes from 'prop-types';
import { Loading } from '@/components/Loading';
import { Text } from '@/components/Text';

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
          <AuthProvider>
            <Router>{children}</Router>
          </AuthProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

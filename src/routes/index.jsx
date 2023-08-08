import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { MainLayout } from '@/layouts/MainLayout';
import { Loading } from '@/components/Loading';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '@/store/selectors';
import useMobile from '@/hooks/useMobile';
import { MobileLayout } from '@/layouts/MobileLayout';

function App() {
  const isMobile = useMobile();
  const Layout = isMobile ? MobileLayout : MainLayout;
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

function AppRoutes() {
  const loggedIn = useSelector(selectLoggedIn);

  const routes = [...publicRoutes, ...(loggedIn ? privateRoutes : [])];

  const root = {
    path: '/',
    element: <App />,
    children: routes,
  };

  const element = useRoutes([root]);

  return <>{element}</>;
}

export default AppRoutes;

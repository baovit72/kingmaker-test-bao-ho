import useAuth from '@/hooks/useAuth';
import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { MainLayout } from '@/layouts/MainLayout';
import { Text } from '@/components/Text';
import { Loading } from '@/components/Loading';

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

function AppRoutes() {
  const { user } = useAuth();
  const routes = [...publicRoutes, ...(user ? privateRoutes : [])];

  const root = {
    path: '/',
    element: <App />,
    children: routes,
  };

  const element = useRoutes([root]);

  return <>{element}</>;
}

export default AppRoutes;

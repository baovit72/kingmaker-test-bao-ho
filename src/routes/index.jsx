import useAuth from '@/hooks/useAuth';
import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { MainLayout } from '@/layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
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

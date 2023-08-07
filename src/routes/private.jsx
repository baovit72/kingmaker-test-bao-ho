import { lazyImport } from '@/utils/lazyImport';

const { HomePage } = lazyImport(() => import('@/features/HomePage'), 'HomePage');

export const privateRoutes = [{ path: '/', element: <HomePage /> }];

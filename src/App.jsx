import { MockInit } from './mockData';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AppProvider>
      <MockInit />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

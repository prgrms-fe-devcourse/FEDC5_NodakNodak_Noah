import { Outlet } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

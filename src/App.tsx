import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

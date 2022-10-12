import 'normalize.css/normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { useState } from 'react';
import AppLayout from '@components/AppLayout';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 5 },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

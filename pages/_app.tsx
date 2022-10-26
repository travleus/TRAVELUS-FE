import 'normalize.css/normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import AppLayout from '@components/AppLayout';
import { wrapper } from '@stores/index';
import { Provider } from 'react-redux';
import MetaHead from '@components/MetaHead';

function MyApp({ Component, ...rest }: AppProps<{ dehydratedState: unknown }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 5 },
        },
      })
  );
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MetaHead />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;

import "../styles/globals.scss";
import Layout from "../components/Layout/";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, useState } from "react";


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
          <Suspense fallback>
        <Layout>
          <Component {...pageProps} />
        </Layout>
          </Suspense>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
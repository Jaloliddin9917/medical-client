import "../styles/globals.scss";
import Layout from "../components/Layout/";
import { appWithTranslation } from "next-i18next";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import https from "https";
import { useState } from "react";

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
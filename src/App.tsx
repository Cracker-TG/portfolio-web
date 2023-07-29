import IndexRouter from "@/routes";
import isPropValid from "@emotion/is-prop-valid";

import "@/styles/App.css";
import { StyleSheetManager } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const renderApp = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <IndexRouter />
    </StyleSheetManager>
  </QueryClientProvider>
);

export default renderApp;

import IndexRouter from "@/routes";
import isPropValid from "@emotion/is-prop-valid";

import "@/styles/App.css";
import { StyleSheetManager } from "styled-components";

const renderApp = (): JSX.Element => (
  <>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <IndexRouter />
    </StyleSheetManager>
  </>
);

export default renderApp;

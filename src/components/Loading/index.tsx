import { ReactElement } from "react";
// import { Spin } from 'components/BaseComponent';
import { Spin } from "../BaseComponent";

function Loading(props: any): ReactElement {
  return <Spin {...props} />;
}

export default Loading;

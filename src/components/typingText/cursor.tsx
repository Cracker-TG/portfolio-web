import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";

const Style = styled.div.withConfig({
  shouldForwardProp,
})`
  display: inline-block;
  width: 8px;
  height: 100%;
  margin-left: 4px;
  background-color: #000;
  animation: blink 1s infinite;
  position: absolute;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
  }
`;

function Cursor(): JSX.Element {
  return <Style />;
}

export default Cursor;

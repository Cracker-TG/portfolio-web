import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

type PropsStyle = TypographyProps;

type Props = {
  text: string;
  children?: JSX.Element | JSX.Element[];
} & PropsStyle;

const StyleTitle = styled.div.withConfig({
  shouldForwardProp,
})<PropsStyle>`
  ${typography}

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 1.25rem;
  }
`;

function Title({ text, ...rest }: Props): JSX.Element {
  return <StyleTitle {...rest}>{text}</StyleTitle>;
}

export default Title;

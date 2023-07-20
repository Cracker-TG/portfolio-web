import styled from "styled-components";
import { flexbox, FlexboxProps, padding, PaddingProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type PropsStyle = { gap?: number } & FlexboxProps & PaddingProps;

type Props = {
  children: JSX.Element | JSX.Element[];
} & PropsStyle;

function Box({ children, ...rest }: Props): JSX.Element {
  const StyleBox = styled.div.withConfig({
    shouldForwardProp,
  })<PropsStyle>`
    display: flex;
    ${flexbox}
    ${padding}
    ${({ gap }) => gap && `${gap}px`}
  `;

  return <StyleBox {...rest}>{children}</StyleBox>;
}

export default Box;

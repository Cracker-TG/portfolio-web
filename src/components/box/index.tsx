import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
} from "styled-system";

type PropsStyle = { gap?: number } & FlexboxProps &
  PaddingProps &
  PositionProps;

type Props = {
  children: JSX.Element | JSX.Element[];
} & PropsStyle;

const StyleBox = styled.div<PropsStyle>`
  display: flex;
  width: 100%;
  ${flexbox}
  ${padding}
  ${position}
  ${({ gap }) => gap && `gap: ${gap}px`}
`;

function Box({ children, ...rest }: Props): JSX.Element {
  return <StyleBox {...rest}>{children}</StyleBox>;
}

export default Box;

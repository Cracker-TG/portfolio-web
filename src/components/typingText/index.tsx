import styled from "styled-components";
import { TypographyProps } from "styled-system";

type PropsStyle = TypographyProps;

type Props = {
  text: string;
  children?: JSX.Element | JSX.Element[];
} & PropsStyle;

const Style = styled.div`
  display: inline-block;
  font-size: 24px;
  font-family: monospace;
  background: #000;
  color: #fff;
  position: relative;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 20px;
    justify-content: center;
  }
`;

function TypingText({ children, text, ...rest }: Props): JSX.Element {
  return (
    <Style {...rest}>
      {text}
      {children}
    </Style>
  );
}

export default TypingText;

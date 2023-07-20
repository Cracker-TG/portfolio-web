import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Button({ children }: Props): JSX.Element {
  const StyleButton = styled.div`
    cursor: pointer;
  `;

  return <StyleButton>{children}</StyleButton>;
}

export default Button;

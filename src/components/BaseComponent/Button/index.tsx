import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
} & IStyledProps;

interface IStyledProps {
  background?: string;
}

const StyleButton = styled.div<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 60px;
  width: 100%;
  ${({ background }) => background && `background: ${background}`};
  border-radius: 10px;
`;

function Button({ children, onClick, ...rest }: Props): JSX.Element {
  return (
    <StyleButton {...rest} onClick={onClick}>
      {children}
    </StyleButton>
  );
}

export default Button;

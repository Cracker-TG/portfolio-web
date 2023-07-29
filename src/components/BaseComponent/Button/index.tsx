import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
} & IStyledProps;

interface IStyledProps {
  variant?: "primary" | "danger";
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #7fff72;
      `;
    case "danger":
      return `
        background-color: #ff9737;
        color: #ffffff;
      `;
    default:
      return "";
  }
};

const StyleButton = styled.div<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 60px;
  width: 100%;
  ${({ variant }) => variant && getVariantStyles(variant)}
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

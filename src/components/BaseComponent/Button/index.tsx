import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
} & IStyledProps;

interface IStyledProps {
  variant?: "primary" | "danger";
  disabled?: boolean;
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
  ${({ disabled }) =>
    disabled &&
    "opacity: 0.6; cursor: not-allowed; pointer-events: none; background: #AFAFAF"}
`;

function Button({ children, onClick, disabled, ...rest }: Props): JSX.Element {
  return (
    <StyleButton {...rest} onClick={onClick} disabled={disabled}>
      {children}
    </StyleButton>
  );
}

export default Button;

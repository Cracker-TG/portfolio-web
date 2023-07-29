import styled from "styled-components";

import { Button } from "../BaseComponent";
interface IProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Styles = styled.div`
  color: #fff;
  background-image: linear-gradient(
    135deg,
    #7fff72,
    #27fca4,
    #00f5ce,
    #00eceb,
    #00e0f9,
    #00dceb,
    #00d8dc,
    #00d3cc,
    #52d097,
    #90c65e,
    #cab433,
    #ff9737
  );

  background-repeat: repeat;
  background-size: 200% 100%;
  display: block;
  padding: 0.5416666667rem 0.8333333333rem;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  z-index: 1;

  &:hover,
  &:focus {
    background-position: 100%;
  }

  &:hover:before,
  &:hover:after,
  &:focus:before,
  &:focus:after {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotate(45deg) translateY(400%);
    transform: rotate(45deg) translateY(400%);
  }

  &:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
  }

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const StyledButton = styled.div``;

function ButtonSheen({ text, onClick }: IProps): JSX.Element {
  return (
    <StyledButton onClick={onClick}>
      <Styles>{text}</Styles>
    </StyledButton>
  );
}

export default ButtonSheen;

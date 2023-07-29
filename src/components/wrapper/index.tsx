import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const StyleWrapper = styled.div`
  display: grid;
  height: 100vh;
  padding: 14%;
  justify-content: center;
  align-items: self-start;

  /* 4K styles */
  /* Applies to screens with a width of 2561px and above */
  @media screen and (min-width: 2561px) {
    padding: 10% 28%;
  }

  /* 2K styles */
  /* Applies to screens with a width of 1921px to 2560px */
  @media screen and (min-width: 1921px) and (max-width: 2560px) {
    padding: 10% 25%;
  }

  /* For Desktop View */
  @media screen and (min-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 1fr;
  }

  /* For Tablet View */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 1fr;
  }

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    padding: 10%;
  }

  /* For Mobile Landscape View */
  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 1fr;
  }
`;

function Wrapper({ children }: Props): JSX.Element {
  return <StyleWrapper>{children}</StyleWrapper>;
}

export default Wrapper;

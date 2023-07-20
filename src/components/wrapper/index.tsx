import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Wrapper({ children }: Props): JSX.Element {
  const Wrapper = styled.div`
    display: grid;
    height: 100vh;
    padding: 14%;
    justify-content: center;
    align-items: self-start;

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
    }

    /* For Mobile Landscape View */
    @media screen and (max-device-width: 640px) and (orientation: landscape) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 2fr 1fr;
    }
  `;

  return <Wrapper>{children}</Wrapper>;
}

export default Wrapper;

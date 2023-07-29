import styled from "styled-components";
import Icons from "../BaseComponent/Icons";

const StyleFooter = styled.footer`
  grid-column: 1 / span 2;
  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    padding-bottom: 4rem;
  }
`;

function Footer(): JSX.Element {
  return (
    <StyleFooter>
      <div className="colophon">
        <a
          href="//github.com/Cracker-TG"
          className="colophon__link"
          target="_blank"
        >
          <img
            width={64}
            src={Icons.github}
            alt="An icon for Github"
            className="colophon__image"
          />
          <span className="colophon__text">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/winai-wangthaklang-02432919b"
          className="colophon__link"
          target="_blank"
        >
          <img
            width={64}
            src={Icons.linkedin}
            alt="An icon for Github"
            className="colophon__image"
          />
          <span className="colophon__text">LinkedIn</span>
        </a>
      </div>
    </StyleFooter>
  );
}

export default Footer;

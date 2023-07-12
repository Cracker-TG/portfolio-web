import IconEmail from "@/assets/email.png";
import IconGitHub from "@/assets/github.png";
import IconLinkedIn from "@/assets/linkedin.png";
import TypingText from "./typing";

function HomePage(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header"></header>
      <div className="grid-wrap">
        <div className="grid">
          <div className="grid__col grid__col--two-thirds">
            <h1>Hey, I'm Crack</h1> <TypingText />
            <h2 className="">Web developer &amp; Full-Stack developer.</h2>
          </div>
          <div className="grid__col grid__col--one-third align-right">
            <div className="button-wrap">
              <div className="button-sheen">
                <a
                  href="mailto:winai.wangthaklang@gmail.com?subject=WANGTHALANG WEBSITE Enquiry&body=Let%27s%20talk%20about%20Crack Winai"
                  className="button"
                >
                  <span className="button__inner">
                    <img
                      src={IconEmail}
                      width={64}
                      className="button__image"
                      alt=""
                    />
                    <span className="button__text">Get in touch</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p>
              Currently a Senior developer at{" "}
              <a href="https://blueseas.co.th/" className="text-link">
                Bluesea Enterprise
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="colophon">
          <a
            href="//github.com/Cracker-TG"
            className="colophon__link"
            target="_blank"
          >
            <img
              width={64}
              src={IconGitHub}
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
              src={IconLinkedIn}
              alt="An icon for Github"
              className="colophon__image"
            />
            <span className="colophon__text">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

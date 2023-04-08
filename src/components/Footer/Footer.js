import { Link } from "react-router-dom";
import linkedin from "../../assets/images//icons//linkedin-icon.png";
import github from "../../assets/images//icons//github-icon.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div>
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by Richard Chiu.
              </p>
            </div>

            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/richardchiu94/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="footer__socials-img"
                  alt="linkedin"
                ></img>
              </a>

              <a
                href="https://github.com/ringrazor2"
                target="_blank"
                className="footer__anch"
              >
                <img
                  src={github}
                  className="footer__socials-img"
                  alt="github"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

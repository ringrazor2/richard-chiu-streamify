import { Link } from "react-router-dom";
import linkedin from "../../assets/images//icons//linkedin-icon.png";
import github from "../../assets/images//icons//github-icon.png";
import QR from "../../assets/images/icons/linkedInQR.png";
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
              <Link to="https://linkedin.com/in/richardchiu94/" target="_blank">
                <img
                  src={linkedin}
                  className="footer__socials-img"
                  alt="linkedin"
                ></img>
              </Link>

              <Link
                to="https://github.com/ringrazor2"
                target="_blank"
                className="footer__anch"
              >
                <img
                  src={github}
                  className="footer__socials-img"
                  alt="github"
                ></img>
              </Link>

              <img
                src={QR}
                className="footer__socials-img qr"
                alt="contact QR"
              ></img>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

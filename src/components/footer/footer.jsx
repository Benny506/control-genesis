import "./footer.css";
import greatnessFromSmallBeginnings from "../../assets/images/greatnessFromSmallBeginnings.png";
import logoAndName from "../../assets/images/logoAndName.png";
import CustomSvg from "../customSvg/CustomSvg";
import ScrollAnimation from "react-animate-on-scroll";
import { MdCall, MdWhatsapp } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
function Footer() {
  const yourGmailAccount = "contact@controlgenesis.com";

  const chatComposeUrl = `https://mail.google.com/mail/u/0/#chat/compose?to=${encodeURIComponent(
    yourGmailAccount
  )}`;

  const myWhatsAppNumber = "2347010915889";
  const preFilledMessage =
    "Hello! I'm interested in your services. Can we chat?";
  const cleanedPhoneNumber = myWhatsAppNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(preFilledMessage);

  const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="footerContainer spacing-50">
        <div className="d-flex justify-content-between align-items-center pb-xl-5 pb-3">
          <div className="fs-72 txt-ff fs-700">
            <span className="txt-ffd">Connect</span> With <br />
            Control Genesis <span className="txt-ffd">Today!</span>{" "}
          </div>
          <img
            src={greatnessFromSmallBeginnings}
            style={{ width: "20vw", maxWidth: "152px" }}
          />
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-5 mt-5 txt-ff pt-5 border-top border-light border-opacity-10">
          {/* Column 1: Address */}
          <div className="fs-19" style={{ maxWidth: '350px' }}>
            <p className="fw-600 mb-3">ADDRESS</p>
            <p className="fw-500 opacity-75">
              No 3 Mbo Otu Street, 8 Miles, Odukpani LGA, Cross River State <br />{" "}
              Nigeria.
            </p>
            {/* <div className="mt-4">
              <button
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "black",
                  border: "1px solid #FFD800",
                  borderRadius: "40px",
                  padding: "13px 18px",
                  color: "#FFD800",
                }}
              >
                <MdCall size={30} />
                <p className="ms-3 mb-0 fw-500">Book a consultation call</p>
              </button>
            </div> */}
          </div>

          {/* Column 2: Contact Us */}
          <div className="fs-19">
            <p className="fw-600 mb-4">CONTACT US</p>
            <div className="d-flex flex-column gap-3">
              <a
                style={{ textDecoration: "none" }}
                href={chatComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="d-flex align-items-center w-100 border-0"
                  style={{
                    backgroundColor: "#FFD800",
                    borderRadius: "40px",
                    padding: "13px 18px",
                    color: "black",
                  }}
                >
                  <TfiEmail size={22} />
                  <p className="ms-3 mb-0 fw-500">contact@controlgenesis.com</p>
                </button>
              </a>

              <a
                style={{ textDecoration: "none" }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="d-flex align-items-center w-100"
                  style={{
                    backgroundColor: "black",
                    border: "1px solid #FFD800",
                    borderRadius: "40px",
                    padding: "13px 18px",
                    color: "#FFD800",
                  }}
                >
                  <MdWhatsapp size={22} />
                  <p className="ms-3 mb-0 fw-500">Whatsapp</p>
                </button>
              </a>
            </div>
          </div>

          {/* Column 3: Links & Legal */}
          <div className="fs-19 d-flex flex-column gap-4">
            <div>
              <p className="fw-600 mb-3">QUICK LINKS</p>
              <div className="d-flex flex-column gap-2 fw-500 opacity-75">
                <NavLink
                  to="/"
                  style={{ color: "white", textDecoration: "none" }}
                  className="footer-nav-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/works"
                  style={{ color: "white", textDecoration: "none" }}
                  className="footer-nav-link"
                >
                  Our Works
                </NavLink>
              </div>
            </div>

            <div>
              <p className="fw-600 mb-3">RC NUMBERS</p>
              <p className="fw-500 opacity-75">Control Genesis LLC- 8069438</p>
            </div>

            {/* <div className="mt-2">
              <p className="fw-600 mb-3">FOLLOW US</p>
              <p className="fw-500">
                <a
                  href="https://www.instagram.com/controlgenesis/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CustomSvg name="instagram" />
                </a>
                &nbsp;{" "}
                <a
                  href="https://www.linkedin.com/company/control-genesis-llc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CustomSvg name="linkedIn" />
                </a>
                &nbsp;{" "}
                <a
                  href="https://web.facebook.com/profile.php?id=61558336018940"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CustomSvg name="facebook" />
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <small className="txt-ff mt-5 d-flex align-items-center flex-wrap justify-content-center">
          &#169; &nbsp; 2024 Powered By &nbsp; <img src={logoAndName} /> &nbsp;
          - All right reserved{" "}
        </small>
      </div>
    </ScrollAnimation>
  );
}

export default Footer;

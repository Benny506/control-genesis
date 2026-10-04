import "./footer.css";
import greatnessFromSmallBeginnings from "../../assets/images/greatnessFromSmallBeginnings.png";
import logoAndName from "../../assets/images/logoAndName.png";
import CustomSvg from "../customSvg/CustomSvg";
import ScrollAnimation from "react-animate-on-scroll";
import { MdCall, MdWhatsapp } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
function Footer({ transparentBg = false }) {
  const yourGmailAccount = "info@controlgenesis.com";

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
      <div className={`footerContainer spacing-50 ${transparentBg ? "transparent-bg" : ""}`}>
        <div className="d-flex justify-content-between align-items-center pb-xl-5 pb-3">
          <div className="fs-72 txt-ff fs-700">
            <span className="txt-ffd">Connect</span> With <br />
            Control Genesis <span className="txt-ffd">Today!</span>{" "}
          </div>
          <img
            src={greatnessFromSmallBeginnings}
            alt="Greatness from small beginnings"
            style={{ width: "20vw", maxWidth: "152px" }}
          />
        </div>

        {/* 2-Column Balanced Section: Contact Buttons on Left, Quick Links & Legal on Right */}
        <div className="d-flex justify-content-between flex-wrap gap-5 mt-5 txt-ff pt-5 border-top border-light border-opacity-10">
          {/* Left Column: Contact Us */}
          <div className="fs-19" style={{ maxWidth: '420px' }}>
            <p className="fw-600 mb-4 txt-ff">CONTACT US</p>
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
                    padding: "13px 22px",
                    color: "black",
                    cursor: "pointer",
                    transition: "transform 0.2s, background-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.backgroundColor = "#ffe234";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "#FFD800";
                  }}
                >
                  <TfiEmail size={22} />
                  <p className="ms-3 mb-0 fw-500">info@controlgenesis.com</p>
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
                    padding: "13px 22px",
                    color: "#FFD800",
                    cursor: "pointer",
                    transition: "transform 0.2s, background-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 216, 0, 0.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.backgroundColor = "black";
                  }}
                >
                  <MdWhatsapp size={22} />
                  <p className="ms-3 mb-0 fw-500">Whatsapp</p>
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Links & Legal */}
          <div className="fs-19 d-flex flex-column gap-4">
            <div>
              <p className="fw-600 mb-3 txt-ff">QUICK LINKS</p>
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
              <p className="fw-600 mb-2 txt-ff fs-16">RC NUMBERS</p>
              <p className="fw-500 opacity-75 fs-15 txt-f5 mb-0">Control Genesis LLC - 8069438</p>
            </div>
          </div>
        </div>

        {/* Centralized Bottom Copyright Text */}
        <div className="mt-5 pt-4 text-center border-top border-light border-opacity-10">
          <small className="txt-ff opacity-75 d-inline-flex align-items-center flex-wrap justify-content-center">
            &#169; &nbsp; 2024 Powered By &nbsp; <img src={logoAndName} alt="Control Genesis" style={{ height: "20px" }} /> &nbsp; - All rights reserved
          </small>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Footer;

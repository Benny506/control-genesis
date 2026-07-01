import "./navigation.css";
import { useEffect, useState } from "react";
import CustomSvg from "../customSvg/CustomSvg";
import { NavLink, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/works",
    title: "Works",
  }
];

function Navigation() {
  const [activeNav, setActiveNav] = useState("/");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  console.log(location);
  const pathname = useLocation().pathname;

  const myWhatsAppNumber = "2349039341520";
  const preFilledMessage =
    "Hello! I'm interested in your services. Can we chat?";
  const cleanedPhoneNumber = myWhatsAppNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(preFilledMessage);

  const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    if (pathname.toLowerCase().includes("works")) {
      setActiveNav("works");
    } else {
      setActiveNav("home");
    }
  }, [pathname]);

  const displayNavLinks = navLinks.map((navLink, i) => {
    const { title, path } = navLink;

    const isActive = activeNav.toLowerCase() == title.toLowerCase();

    return (
      <NavLink
        key={i}
        to={path}
        style={{
          color: isActive ? "#FFD800" : undefined,
        }}
        className="txt-ff fs-19 fw-500 text-decoration-none"
      >
        {title}
      </NavLink>
    );
  });

  return (
    <div
      className="fixedMovement fw-500 fixed-top"
      style={{
        backgroundColor: "rgba(15, 15, 15, 0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "10px 24px",
        zIndex: "100",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div>
        <CustomSvg name="CG_Icon" />
        <span className="ms-2 txt-ff ff-gro fw-700">CONTROL GENESIS</span>
      </div>
      <div className="d-none d-lg-flex align-items-center justify-content-between bg-trans ">
        <div className="me-5 txt-ff d-flex gap-3">{displayNavLinks}</div>
        <a
          style={{ textDecoration: "none" }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="d-flex align-items-center"
            style={{
              backgroundColor: "#FFD800",
              borderRadius: "40px",
              padding: "10px 18px",
            }}
          >
            <p className="mb-0 fw-500">Contact us</p>
          </button>
        </a>
      </div>
      <div
        className="d-flex d-lg-none"
        onClick={handleShow}
        style={{ width: "38px", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{ height: "3px", width: "18px", backgroundColor: "#ffffff" }}
        ></div>
        <div
          style={{
            margin: "8px 0px",
            height: "3px",
            width: "38px",
            backgroundColor: "#ffffff",
          }}
        ></div>
        <div
          style={{
            height: "3px",
            width: "18px",
            alignSelf: "end",
            backgroundColor: "#ffffff",
          }}
        ></div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=""
        style={{ backgroundColor: "#737373" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column d-lg-flex justify-content-center align-items-center p-5" style={{ backgroundColor: "#000", borderRadius: "20px" }}>
            <div
              className="d-flex flex-column mb-5 justify-content-between align-items-center"
              style={{ height: "200px" }}
            >
              {" "}
              {displayNavLinks}
            </div>
            <a
              style={{ textDecoration: "none" }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "#FFD800",
                  borderRadius: "40px",
                  padding: "13px 18px",
                }}
              >
                <p className="mb-0 fw-500">Contact us</p>
              </button>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation;

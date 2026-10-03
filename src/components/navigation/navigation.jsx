import "./navigation.css";
import { useEffect, useState } from "react";
import CustomSvg from "../customSvg/CustomSvg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [activeNav, setActiveNav] = useState("home");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const myWhatsAppNumber = "2347010915889";
  const preFilledMessage =
    "Hello! I'm interested in your services. Can we chat?";
  const cleanedPhoneNumber = myWhatsAppNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(preFilledMessage);

  const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    if (pathname.toLowerCase().includes("works")) {
      setActiveNav("works");
    // } else if (pathname.toLowerCase().includes("developer-view")) {
    //   setActiveNav("how we work");
    } else {
      setActiveNav("home");
    }
    setShow(false);
  }, [pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };
    if (show) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show]);

  return (
    <div
      className="fixedMovement fw-500 fixed-top"
      style={{
        backgroundColor: "rgba(15, 15, 15, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "14px 24px",
        zIndex: 9999,
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Brand Logo & Name */}
      <NavLink
        to="/"
        data-transition-path="/"
        className="d-flex align-items-center text-decoration-none"
      >
        <div
          id="navbar-logo"
          className="d-inline-flex align-items-center justify-content-center"
          style={{ width: 38, height: 38 }}
        >
          <CustomSvg name="CG_Icon" />
        </div>
        <span className="ms-2 txt-ff ff-gro fw-700 tracking-wide" style={{ letterSpacing: "0.04em" }}>
          CONTROL GENESIS
        </span>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="d-none d-lg-flex align-items-center justify-content-between bg-trans">
        <div className="me-5 txt-ff d-flex gap-4">
          <NavLink
            to="/"
            data-transition-path="/"
            className={`nav-link-item ${activeNav === "home" ? "active" : ""} txt-ff fs-19 fw-500 text-decoration-none`}
            style={{ color: activeNav === "home" ? "#FFD800" : undefined }}
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            data-transition-path="/works"
            className={`nav-link-item ${activeNav === "works" ? "active" : ""} txt-ff fs-19 fw-500 text-decoration-none`}
            style={{ color: activeNav === "works" ? "#FFD800" : undefined }}
          >
            Works
          </NavLink>
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
              color: "#000000",
              borderRadius: "40px",
              padding: "10px 22px",
              border: "none",
              fontWeight: 600,
              fontSize: "14px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 2px 10px rgba(255, 216, 0, 0.2)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(255, 216, 0, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(255, 216, 0, 0.2)";
            }}
          >
            <span className="mb-0 fw-600 txt-00 ff-gro">Contact us</span>
          </button>
        </a>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        type="button"
        className="d-flex d-lg-none mobile-nav-toggle align-items-center justify-content-center"
        onClick={handleShow}
        aria-label="Open Navigation"
      >
        <span className="mobile-toggle-bar" />
        <span className="mobile-toggle-bar" />
      </button>

      {/* Mobile Side-Nav Drawer (Pure 3 CTAs) */}
      <AnimatePresence>
        {show && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
            />

            {/* Drawer */}
            <motion.aside
              className="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="mobile-nav-header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div style={{ width: 32, height: 32 }} className="d-inline-flex align-items-center justify-content-center">
                    <CustomSvg name="CG_Icon" />
                  </div>
                  <span className="txt-ff ff-gro fw-700 fs-16 tracking-wide">
                    CONTROL GENESIS
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mobile-nav-close"
                  aria-label="Close Navigation"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Pure 3 CTAs: Home, Works, Contact */}
              <nav className="mobile-nav-links d-flex flex-column justify-content-center">
                <NavLink
                  to="/"
                  data-transition-path="/"
                  onClick={() => {
                    handleClose();
                    navigate("/");
                  }}
                  className={`mobile-nav-link d-flex align-items-center justify-content-between text-decoration-none ff-gro ${
                    activeNav === "home" ? "active" : ""
                  }`}
                >
                  <span>Home</span>
                  <span className="mobile-nav-arrow">→</span>
                </NavLink>

                <NavLink
                  to="/works"
                  data-transition-path="/works"
                  onClick={() => {
                    handleClose();
                    navigate("/works");
                  }}
                  className={`mobile-nav-link d-flex align-items-center justify-content-between text-decoration-none ff-gro ${
                    activeNav === "works" ? "active" : ""
                  }`}
                >
                  <span>Works</span>
                  <span className="mobile-nav-arrow">→</span>
                </NavLink>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="mobile-nav-link d-flex align-items-center justify-content-between text-decoration-none ff-gro"
                >
                  <span>Contact</span>
                  <span className="mobile-nav-arrow">↗</span>
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navigation;

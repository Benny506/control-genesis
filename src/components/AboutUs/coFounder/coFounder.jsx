import { useState, useRef, useEffect } from "react";
import "./coFounder.css";
import ben from "../../../assets/images/ben.png";
import alpha from "../../../assets/images/alpha.png";
import mensah from "../../../assets/images/mensah.png";
import paul from "../../../assets/images/paul.png";
import peter from "../../../assets/images/peter.png";

const AnimatedOnScroll = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // You can adjust this value (0.0 to 1.0)
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className={`${animationClass} ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
};

function CoFounder() {
  return (
    <div className="mt-5">
      <div>
        <div className="txt-ff mb-5">
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "30px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "3px",
                marginRight: "15px",
              }}
            ></div>
            <div className="fs-19">The Team</div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <div className="fs-45">
              Meet Our <br /> Exceptional Team
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div
                  style={{
                    height: "30px",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    marginRight: "15px",
                  }}
                ></div>
                <div className="fs-16" style={{ maxWidth: "469px" }}>
                  Get to know the experts behind our success, innovation, and
                  commitment to excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="txt-ff mb-5 gap-3 d-flex justify-content-center align-items-center justify-content-lg-between flex-wrap">
          {/* First Column */}
          <div className="col-container">
            <AnimatedOnScroll animationClass="fade-and-slide">
              <img src={alpha} className="foundersImage" alt="Alpha Iyajini" />
              <p className="fs-23 fw-500">Alpha Iyajini</p>
            </AnimatedOnScroll>
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#222222",
                maxWidth: "374px",
                maxHeight: "80px",
                height: "30vw",
                margin: "80px 0px",
              }}
            ></div>
            <AnimatedOnScroll animationClass="fade-and-slide">
              <img src={paul} className="foundersImage" alt="Paul Olom" />
              <p className="fs-23 fw-500">Paul Olom</p>
            </AnimatedOnScroll>
          </div>

          {/* Second Column */}
          <div className="col-container">
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#222222",
                maxWidth: "374px",
                maxHeight: "80px",
                height: "30vw",
                marginBottom: "80px",
              }}
            ></div>
            <AnimatedOnScroll animationClass="fade-and-slide">
              <img src={ben} className="foundersImage" alt="Benedict Olom" />
              <p className="fs-23 fw-500">Benedict Olom</p>
              <p className="fs-19 fw-400">Chief Executive Officer (CEO) </p>
            </AnimatedOnScroll>
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#222222",
                maxWidth: "374px",
                maxHeight: "80px",
                height: "30vw",
                marginTop: "80px",
              }}
            ></div>
          </div>

          {/* Third Column */}
          <div className="col-container">
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "transparent",
                maxWidth: "374px",
                maxHeight: "80px",
                height: "30vw",
                marginTop: "80px",
              }}
            ></div>
            <AnimatedOnScroll animationClass="fade-and-slide">
              <img src={mensah} className="foundersImage" alt="Emmanuel Mensah" />
              <p className="fs-23 fw-500">Emmanuel Mensah</p>
            </AnimatedOnScroll>
            <div
              style={{
                borderRadius: "30px",
                backgroundColor: "#222222",
                maxWidth: "374px",
                maxHeight: "80px",
                height: "30vw",
                margin: "80px 0px",
              }}
            ></div>
            <AnimatedOnScroll animationClass="fade-and-slide">
              <img src={peter} className="foundersImage" alt="Peter Olom" />
              <p className="fs-23 fw-500">Peter Olom</p>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoFounder;
import "./hero.css";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="animate__animated animate__bounce marginGiver mb-5 mb-lg-0 d-flex gap-5 flex-column flex-xl-row justify-content-between">
        <div className="txt-ff fw-500 " style={{ maxWidth: "534px" }}>
          <div className="fs-19 d-flex align-items-center">
            <div
              style={{
                width: "30px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "3px",
                marginRight: "15px",
              }}
            ></div>
            <div>Welcome To Control Genesis</div>
          </div>
          <div className="fs-48 my-3 my-md-4">
            <span className="txt-ffd">Purpose</span> driven solutions for your{" "}
            <span className="txt-ffd">Business</span>.
          </div>
          <div className="fs-19 mb-3 mb-md-5">
            We solve problem for problem solvers would you like to tell us more
            about what you are facing ?
          </div>
          {/* <div className="d-flex flex-wrap gap-3"> */}
          <button
            className="paddingButton"
            style={{
              backgroundColor: "#FFD800",
              borderRadius: "29.5px",
              color: "black",
              marginRight: "25px",
            }}
          >
            Get Started
          </button>
          {/* </div> */}
        </div>

        <div className="txt-ff d-flex gap-2">
          <div id="deduce" >
            <h2 className="scrolling-text-container scrolling-text fw-600 fs-23">WEB/APP DEVELOPMENT</h2>
            <div
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            ></div>
            <p className="fw-400">
              Launch a fast, modern website or app built to convert.
            </p>
          </div>
          <div id="design" className="scrolling-text-container ">
            <h2 className="fw-600 fs-23 scrolling-text">VIDEO EDITING</h2>
            <div
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            ></div>
            <p className="fw-400">
              Grab attention, keep it, and turn scrolls into loyal fans.
            </p>
          </div>
          <div id="develop" className="scrolling-text-container">
            <h2 className="fw-600 fs-23 scrolling-text">BRAND CONSULTATIONS</h2>
            <div
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            ></div>
            <p className="fw-400">
              Get the clarity and confidence to grow your brand with purpose{" "}
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Hero;
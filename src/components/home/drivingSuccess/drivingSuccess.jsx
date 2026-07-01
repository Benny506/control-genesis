import "./drivingSuccess.css";
// import drivingSuccess1 from "../../../assets/images/drivingSuccess1.png";
// import drivingSuccess2 from "../../../assets/images/drivingSuccess2.png";
// import drivingSuccess3 from "../../../assets/images/drivingSuccess3.png";
// import greatnessFromSmallBeginnings from "../../../assets/images/greatnessFromSmallBeginnings.png";
import drivingSuccessImages from "../../../assets/images/drivingSuccessImages.svg";
import personalized from "../../../assets/images/personalized.svg";
import creative from "../../../assets/images/creative.svg";
import specialized from "../../../assets/images/specialized.svg";
import designNPrototyping from "../../../assets/images/designNPrototyping.png";
import developmentNTesting from "../../../assets/images/developmentNTesting.png";
import careerDevPlatform from "../../../assets/images/careerDevPlatform.png";
import eduTechMobile from "../../../assets/images/eduTechMobile.png";
import CustomSvg from "../../customSvg/CustomSvg";
import ScrollAnimation from "react-animate-on-scroll";

function DrivingSuccess() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div style={{ marginTop: "87px", color: "#ffffff" }}>
        <div>
          <div>
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
              <div className="fs-19">About Us</div>
            </div>
            <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
              <div className="fs-45">
                Driving Success <br /> Through Innovation.
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
                    Transforming ideas into impactful solutions that drive
                    growth and success.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-5 flex-xl-row mt-4 align-items-start justify-content-between ">
            {/* <div className="d-flex mt-5">
            <img src={drivingSuccess1} id="drivingSuccess1" />
            <div className="ms-4">
              <div className="d-flex flex-column">
                <div>
                  <img src={drivingSuccess2} id="drivingSuccess2" />
                </div>
                <div className="mt-5">
                  <img
                    src={greatnessFromSmallBeginnings}
                    id="greatnessFromSmallBeginnings"
                  />
                  <img src={drivingSuccess3} id="drivingSuccess3" />
                </div>
              </div>
            </div>
          </div> */}
            <img src={drivingSuccessImages} id="imgSizing" />
            <div>
              <div className="fw-400 txt-ff d-flex align-items-end">
                <img src={personalized} />
                <div>
                  <h2 className="fs-19 mb-2">Personalized approach</h2>
                  <p className="fs-13">
                    A customized approach focused on your unique needs and
                    goals.
                  </p>
                </div>
              </div>
              <div className="fw-400 txt-ff my-3 d-flex align-items-end">
                <img src={creative} />
                <div>
                  <h2 className="fs-19 mb-2">Creative strategy</h2>
                  <p className="fs-13">
                    Developing unique strategies that drive growth and foster
                    innovation.{" "}
                  </p>
                </div>
              </div>
              <div className="fw-400 d-flex txt-ff align-items-end">
                <img src={specialized} />
                <div>
                  <h2 className="fs-19 mb-2">Specialized experience</h2>
                  <p className="fs-13">
                    Bringing expertise and tailored strategies for impactful
                    results.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STRUCTURED APPROACH */}
        <div style={{ marginTop: "87px" }}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="fw-500 fs-19 d-flex align-items-center">
              <div
                style={{
                  width: "30px",
                  height: "2px",
                  backgroundColor: "white",
                  borderRadius: "3px",
                  marginRight: "15px",
                }}
              ></div>
              Our Work Methodology
            </div>
            <div className="fs-45  fw-600">
              Structured approach <br /> for optimal results.
            </div>
          </div>

          <div className="mt-5 d-flex align-items-center justify-content-center justify-content-xxl-between flex-wrap gap-5">
            <div className="txt-ff" id="research">
              <h3 className="fs-23 fw-600">Research & Delivery</h3>
              <div className="gaping"></div>
              <div>
                <div
                  style={{
                    maxWidth: "280px",
                    height: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    marginRight: "15px",
                    marginBottom: "15px",
                  }}
                ></div>
                <div className="fw-500 fs-19">
                  Insight-driven research and efficient delivery, ensuring
                  high-quality solutions and long-term success.
                </div>
              </div>
            </div>

            <div>
              <div
                className="sizeAdjustment"
                style={{
                  padding: "23px",
                  // maxWidth: "370px",
                  borderRadius: "15px",
                  backgroundColor: "#222222",
                  marginBottom: "20px  ",
                }}
              >
                <div className="fw-500 fs-19">
                  Insight-driven research and efficient delivery, ensuring
                  high-quality solutions and long-term success.
                </div>
                <div
                  style={{
                    maxWidth: "280px",
                    height: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    margin: "15px 15px 36px 0px",
                  }}
                ></div>
                <h3 className="fs-23 fw-600">Design & Prototyping</h3>
              </div>
              <img src={designNPrototyping} className="sizeAdjustment" />
            </div>

            <div>
              <div
                className="sizeAdjustment"
                style={{
                  padding: "23px",
                  // maxWidth: "370px",
                  borderRadius: "15px",
                  backgroundColor: "#222222",
                  marginBottom: "20px  ",
                }}
              >
                <div className="fw-500 fs-19">
                  Robust development and rigorous testing to deliver reliable,
                  high-performance solutions.
                </div>
                <div
                  style={{
                    maxWidth: "280px",
                    height: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    margin: "15px 15px 36px 0px",
                  }}
                ></div>
                <h3 className="fs-23 fw-600">Development & Testing</h3>
              </div>
              <img src={developmentNTesting} className="sizeAdjustment" />
            </div>
          </div>
        </div>

        {/* RECENT WORK */}
        <div style={{ marginTop: "67px" }}>
          <div>
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
              <div className="fs-19">Our Projects</div>
            </div>
            <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
              <div className="fs-45">
                Our Recent <br />
                Work Portfolio
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
                    Explore our latest projects showcasing innovation, quality,
                    and impactful results.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex align-items-center justify-content-center justify-content-xxl-between gap-4 flex-wrap">
            <div
              className="recentImage"
              style={{
                padding: "33px",
                borderRadius: "22px",
                backgroundColor: "#222222",
              }}
            >
              <img src={careerDevPlatform} className="recentImageSize" />
              <div className="mt-3 mb-5 fs-11 d-flex gap-3 align-items-center justify-content-start">
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  UI/UX Design
                </div>
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  React.JS Development
                </div>
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  Website Design
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fw-600 fs-25">
                  Career Dev Platform - <br /> Website Development
                </div>
                <div>
                  <CustomSvg name="expandArrow" width="40px" />
                </div>
              </div>
            </div>

            <div
              className="recentImage"
              style={{
                padding: "33px",
                borderRadius: "22px",
                backgroundColor: "#222222",
              }}
            >
              <img src={eduTechMobile} className="recentImageSize" />
              <div className="mt-3 mb-5 fs-11 d-flex gap-3 align-items-center justify-content-start">
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  UI/UX Design
                </div>
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  React Native Development
                </div>
                <div
                  style={{
                    border: "1px solid #FAFAFF",
                    padding: "11px 13px",
                    borderRadius: "18px",
                    fontWeight: "400",
                  }}
                >
                  Wireframe
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fw-600 fs-25">
                  Edu-Tech - Mobile <br />
                  App Development
                </div>
                <div>
                  <CustomSvg name="expandArrow" width="40px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default DrivingSuccess;

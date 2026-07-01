import { motion } from "framer-motion";
import CustomSvg from "../../customSvg/CustomSvg";
import "./digitalSolution.css";
import webDev from "../../../assets/images/webDev.png";
import mobileAppDev from "../../../assets/images/mobileAppDev.png";
import uiUxDesign from "../../../assets/images/uiUxDesign.png";
import graphicDesign from "../../../assets/images/graphicDesign.png";
import deduction from "../../../assets/images/deduction.png";

// Define animation variants for a clean and reusable approach
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

function DigitalSolution() {
  return (
    <div className="txt-ff">
      {/* Introduction Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="d-flex align-items-center">
          <motion.div
            variants={itemVariants}
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></motion.div>
          <motion.div variants={itemVariants} className="fs-19">
            Our Services
          </motion.div>
        </div>
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
          <motion.div variants={itemVariants} className="fs-45">
            Discover Our <br /> Digital Solutions
          </motion.div>
          <motion.div variants={itemVariants}>
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
                Explore tailored digital solutions designed to elevate your
                business and deliver measurable results.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="mt-5">
        {[
          {
            title: "Website Development",
            number: "01.",
            image: webDev,
            text: "Creating responsive, scalable websites focused on performance and user experience.",
            tags: [
              "React.JS Development",
              "Vue.js Development",
              "Node.js Development",
              "Laravel Development",
            ],
          },
          {
            title: "Mobile Application Development",
            number: "02.",
            image: mobileAppDev,
            text: "Crafting seamless, high-performance mobile apps designed for reliability and user satisfaction.",
            tags: [
              "Flutter App Development",
              "React Native App Development",
              "IOS App Development",
              "Android App Development",
            ],
          },
          {
            title: "UI/UX Design",
            number: "03.",
            image: uiUxDesign,
            text: "Designing intuitive and visually appealing interfaces that provide seamless and engaging user experiences.",
            tags: [
              "User Research",
              "Wireframing & Prototyping",
              "System Design",
              "Usability Testing",
              "Visual Design",
            ],
          },
          {
            title: "Graphics Design",
            number: "04.",
            image: graphicDesign,
            text: "Crafting visually engaging designs that communicate messages clearly, enhance brand identity, and captivate audiences.",
            tags: [
              "Brand Identity Design",
              "Visual Communication",
              "Digital and Print Design",
              "Motion Graphics",
            ],
          },
          {
            title: "Deduction",
            number: "05.",
            image: deduction,
            text: "Using data and insights to create strategies that drive growth and enhance performance.",
            tags: [
              "Market Research and Analysis",
              "Market Penetration Strategy",
              "Strategic Positioning",
              "Brand Positioning",
            ],
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-30 services mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div
              variants={itemVariants}
              className="fs-32 fw-500 d-flex align-items-center gap-4 justify-content-between"
            >
              <div>{service.number}</div>
              <div className="service-title">{service.title}</div>
              <div className="d-flex align-items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="fs-16"
                  style={{
                    padding: "10px 30px",
                    borderRadius: "27px",
                    color: "#000",
                    backgroundColor: "#FFD800",
                    marginRight: "10px",
                  }}
                >
                  Learn more
                </motion.button>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <CustomSvg name="expandArrow" width="30px" />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mt-4 mt-xl-5 d-flex align-items-start justify-content-center flex-column">
                <div
                  className="txt-ff fs-16 fw-400 d-flex align-items-center justify-content-start gap-3"
                  style={{ maxWidth: "521px" }}
                >
                  {service.tags.length > 0 && (
                    <div className="d-flex align-items-start justify-content-center flex-column gap-3">
                      {service.tags.slice(0, 2).map((tag, i) => (
                        <motion.div
                          key={i}
                          variants={cardItemVariants}
                          style={{
                            padding: "18px 22px",
                            borderRadius: "30px",
                            backgroundColor: "#222222",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                  )}
                  {service.tags.length > 2 && (
                    <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                      {service.tags.slice(2).map((tag, i) => (
                        <motion.div
                          key={i}
                          variants={cardItemVariants}
                          style={{
                            padding: "18px 22px",
                            borderRadius: "30px",
                            backgroundColor: "#222222",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className="fs-16"
                  style={{
                    maxWidth: "471px",
                    marginTop: "32px",
                    marginBottom: "48px",
                  }}
                >
                  {service.text}
                </div>
                <div>
                  <img src={service.image} className="imgSizing" alt={service.title} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DigitalSolution;
import ourStory from "../../../assets/images/ourStory.png";
import drivenByResult from "../../../assets/images/drivenByResult.png";
import CustomSvg from "../../customSvg/CustomSvg";
import { motion } from "framer-motion";

function AboutUsHero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Slightly reduced stagger for a snappier feel
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced y for a more subtle slide
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120, // Slightly stiffer spring
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="marginGiver txt-ff mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Removed 'once: true'
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="fs-83 fw-600">
            Tailored to bring out the best in your Genesis <br />
          </motion.div>
          <motion.div variants={itemVariants} className="fs-19 fw-400 mt-2">
            Your businesses goals are the center point of our delivery
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="mt-5 d-flex flex-column"
        >
          <div className="alignSelfCenter">
            <motion.img
              variants={imageVariants}
              src={drivenByResult}
              style={{ width: "70vw" }}
              alt="Driven by Results"
            />
          </div>
          <motion.div
            variants={itemVariants}
            className="fs-19 fw-400 alignSelfEnd mt-4"
            style={{ maxWidth: "605px" }}
          >
            {/* Consider adding some text here if this div is meant to display something */}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="txt-ff d-flex flex-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Removed 'once: true'
        variants={containerVariants}
      >
        <div>
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
            <motion.div variants={itemVariants} className="fs-19">Our Story</motion.div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <motion.div variants={itemVariants} className="fs-45">
              Passion. <br />
              Progress. Purpose.
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="d-flex align-items-center">
                <motion.div
                  variants={itemVariants}
                  style={{
                    height: "30px",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    marginRight: "15px",
                  }}
                ></motion.div>
                <motion.div variants={itemVariants} className="fs-16" style={{ maxWidth: "469px" }}>
                  From vision to reality, our journey is defined by Passion,
                  Progress, and Purpose.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.img
          variants={imageVariants}
          src={ourStory}
          style={{ width: "87vw", marginTop: "20px", alignSelf: "center" }}
          alt="Our Story"
        />
        <motion.div
          variants={itemVariants}
          className="fs-19 fw-400 align-self-end mt-4"
          style={{ maxWidth: "605px" }}
        >
          Since inception, our primary driving force has been to empower
          startups and entrepreneurs to define their genesis. Our essence lies
          in offering solutions that support emerging businesses and guarantee
          their success.
        </motion.div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div
        className="txt-ff mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Removed 'once: true'
        variants={containerVariants}
      >
        <div>
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
            <motion.div variants={itemVariants} className="fs-19">Our Values</motion.div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <motion.div variants={itemVariants} className="fs-45">
              Principles That <br /> Define Our Journey.
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="d-flex align-items-center">
                <motion.div
                  variants={itemVariants}
                  style={{
                    height: "30px",
                    width: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    marginRight: "15px",
                  }}
                ></motion.div>
                <motion.div variants={itemVariants} className="fs-16" style={{ maxWidth: "469px" }}>
                  From vision to reality, our journey is defined by Passion,
                  Progress, and Purpose.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="d-flex mt-5 align-items-center justify-content-center gap-4 flex-wrap">
          {/* Excellence Card */}
          <motion.div
            style={{
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "398px",
              backgroundColor: "#303030",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }} // Trigger card animations when more of them are visible
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="fs-23 fw-500">Excellence in execution.</div>
              <div>
                <CustomSvg name="excellence" />
              </div>
            </div>
            <div style={{ maxHeight: "180px", height: "40vw" }}></div>
            <div className="fs-19 fw-400 mb-3">
              Delivering quality and precision in every endeavor, ensuring that
              every detail meets the highest standards of excellence.
            </div>
            <div
              style={{ width: "140px", height: "1px", backgroundColor: "#fff" }}
            ></div>
          </motion.div>

          {/* Client-centric Card */}
          <motion.div
            style={{
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "398px",
              backgroundColor: "#303030",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="fs-23 fw-500">Client-centric focus.</div>
              <div>
                <CustomSvg name="client" />
              </div>
            </div>
            <div style={{ maxHeight: "180px", height: "40vw" }}></div>
            <div className="fs-19 fw-400 mb-3">
              Focusing on client needs to provide customized solutions that
              ensure optimal results, drive efficiency, and create lasting
              impact.
            </div>
            <div
              style={{ width: "140px", height: "1px", backgroundColor: "#fff" }}
            ></div>
          </motion.div>

          {/* Sustainable Impact Card */}
          <motion.div
            style={{
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "398px",
              backgroundColor: "#303030",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="fs-23 fw-500">Sustainable impact.</div>
              <div>
                <CustomSvg name="sustainable" />
              </div>
            </div>
            <div style={{ maxHeight: "185px", height: "40vw" }}></div>
            <div className="fs-19 fw-400 mb-3">
              Creating long-term value through responsible practices that foster
              growth, sustainability, and positive impact.
            </div>
            <div
              style={{ width: "140px", height: "1px", backgroundColor: "#fff" }}
            ></div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutUsHero;
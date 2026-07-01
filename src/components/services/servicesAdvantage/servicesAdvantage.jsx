import { motion } from "framer-motion";
import "./servicesAdvantage.css";

function ServicesAdvantage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const yellowCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100 },
        duration: 0.5,
      },
    },
  };

  const rotatingCardVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const columnTwoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="d-flex justify-content-between mt-5 flex-wrap gap-4 overflow-hidden">
      {/* Left Text Section */}
      <motion.div
        className="txt-ff"
        style={{ marginTop: "300px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={textVariants} className="d-flex align-items-center">
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></div>
          <div className="fs-19">Our Service Advantage</div>
        </motion.div>
        <motion.div variants={textVariants} className="fs-45 fw-600">
          What Makes Us <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; Stand Out
        </motion.div>
      </motion.div>

      {/* Cards and Shapes Section */}
      <div className="d-flex gap-3 align-items-center">
        {/* Column 1 */}
        <motion.div
          className="txt-02"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnTwoVariants}
        >
          <motion.div
            style={{
              borderRadius: "30px",
              backgroundColor: "#222222",
              maxWidth: "357px",
              maxHeight: "80px",
              height: "30vw",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
          <motion.div
            className="my-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "#FFD800",
              maxWidth: "357px",
              padding: "20px",
            }}
            variants={yellowCardVariants}
          >
            <div className="fs-23 fw-500">Strategic Approach</div>
            <div className="updatedGap"></div>
            <div
              style={{
                backgroundColor: "#22222240",
                maxWidth: "280px",
                height: "2px",
                marginBottom: "15px",
              }}
            ></div>
            <div className="fw-300 fs-19">
              Combining deep insight and thorough analysis to create impactful
              strategies that drive sustainable growth.
            </div>
          </motion.div>
          <motion.div
            style={{
              borderRadius: "30px",
              backgroundColor: "#222222",
              maxWidth: "357px",
              maxHeight: "80px",
              height: "30vw",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="txt-02"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnTwoVariants}
        >
          <motion.div
            style={{
              borderRadius: "15px",
              backgroundColor: "#222222",
              maxWidth: "357px",
              maxHeight: "40px",
              height: "10vw",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
          <motion.div
            className="my-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "#FFD800",
              maxWidth: "357px",
              padding: "20px",
            }}
            variants={yellowCardVariants}
          >
            <div className="fs-23 fw-500">Innovative Design</div>
            <div className="updatedGap"></div>
            <div
              style={{
                backgroundColor: "#22222240",
                maxWidth: "280px",
                height: "2px",
                marginBottom: "15px",
              }}
            ></div>
            <div className="fw-300 fs-19">
              Crafting creative and user-centered solutions that resonate with
              your audience and enhance brand identity.
            </div>
          </motion.div>

          <motion.div
            className="my-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "#FFD800",
              maxWidth: "357px",
              padding: "20px",
            }}
            variants={yellowCardVariants}
          >
            <div className="fs-23 fw-500">Scalable Services</div>
            <div className="updatedGap"></div>
            <div
              style={{
                backgroundColor: "#22222240",
                maxWidth: "280px",
                height: "2px",
                marginBottom: "15px",
              }}
            ></div>
            <div className="fw-300 fs-19">
              Delivering flexible solutions that can grow and adapt with your
              business, meeting evolving demands.
            </div>
          </motion.div>

          <motion.div
            style={{
              borderRadius: "15px",
              backgroundColor: "#222222",
              maxWidth: "357px",
              maxHeight: "40px",
              height: "10vw",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
        </motion.div>

        {/* Column 3 (Static, but animated for visual interest) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnTwoVariants}
        >
          <motion.div
            style={{
              backgroundColor: "transparent",
              marginBottom: "20px",
              width: "2px",
              height: "300px",
              borderRadius: "15px 0px 0px 15px",
            }}
            variants={yellowCardVariants}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: "#222222",
              marginTop: "20px",
              maxWidth: "70px",
              maxHeight: "300px",
              width: "10vw",
              height: "35vw",
              borderRadius: "15px 0px 0px 15px",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: "#222222",
              margin: "20px 0px",
              maxWidth: "70px",
              maxHeight: "300px",
              width: "10vw",
              height: "35vw",
              borderRadius: "15px 0px 0px 15px",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
          <motion.div
            style={{
              backgroundColor: "#222222",
              marginTop: "20px",
              maxWidth: "70px",
              maxHeight: "300px",
              width: "10vw",
              height: "35vw",
              borderRadius: "15px 0px 0px 15px",
            }}
            variants={rotatingCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesAdvantage;
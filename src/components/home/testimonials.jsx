import elijahMoses from "../../assets/images/elijahMoses.png";
import oliviaChris from "../../assets/images/oliviaChris.png";
import tonyMandi from "../../assets/images/tonyMandi.png";
import { motion } from "framer-motion";

function Testimonials() {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      style={{ marginTop: "80px", color: "white" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={containerVariants}
    >
      <div>
        <div className="d-flex align-items-center">
          <motion.div
            variants={textVariants}
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></motion.div>
          <motion.div variants={textVariants} className="fs-19">
            Clients Testimonials
          </motion.div>
        </div>
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
          <motion.div variants={textVariants} className="fs-45">
            Trusted By <br />
            Those We Serve.
          </motion.div>
          <motion.div variants={textVariants} className="mt-4">
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
                Discover how our clients have achieved success with us and why
                they trust our expertise.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-5 d-flex align-items-center justify-content-center flex-wrap justify-content-xxl-between gap-4"
        variants={containerVariants}
      >
        {/* Testimonial Card 1 */}
        <motion.div
          variants={cardVariants}
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={elijahMoses} alt="Elijah Moses" />
            <div className="my-2 fs-19">Elijah Moses</div>
            <div className="fs-16">Chief Executive Officer (CEO) - Verion X</div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>
          <div className="fw-500 fs-13">
            Control Genesis transformed our vision into reality with precision
            and creativity. Their team exceeded our expectations by providing
            innovative solutions and exceptional support throughout the entire
            process.
          </div>
        </motion.div>

        {/* Testimonial Card 2 */}
        <motion.div
          variants={cardVariants}
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={oliviaChris} alt="Olivia Chris" />
            <div className="my-2 fs-19">Olivia Chris</div>
            <div className="fs-16">Project Manager - BrightFuture Labs</div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>
          <div className="fw-500 fs-13">
            Their commitment to excellence and attention to detail helped us
            achieve our goals faster and more efficiently. Control Genesis
            provided us with a seamless process, from ideation to execution.
          </div>
        </motion.div>

        {/* Testimonial Card 3 */}
        <motion.div
          variants={cardVariants}
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={tonyMandi} alt="Tony Mandi" />
            <div className="my-2 fs-19">Tony Mandi</div>
            <div className="fs-16">Head of Product - HabitHack</div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>
          <div className="fw-500 fs-13">
            Their professional approach and deep industry knowledge made a real
            difference in our success. We were able to tackle complex challenges
            with their strategic guidance and expertise.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Testimonials;
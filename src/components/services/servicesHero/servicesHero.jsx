import { motion } from "framer-motion";

function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const bubbleVariants = {
    initial: { scale: 0.9, opacity: 0.8 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        repeat: Infinity, // This makes the animation loop
        repeatType: "reverse", // This makes it go back and forth
        duration: 1.5,
      },
    },
  };

  return (
    <div
      style={{ color: "#fff" }}
      className="d-flex gap-4 flex-wrap align-items-center justify-content-center justify-content-xxl-between"
    >
      <motion.div
        style={{ margin: "30px 0px 60px 0px", maxWidth: "798px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={textItemVariants} className="fs-48 fw-500">
          Empowering Your Vision Through Strategic Solutions.
        </motion.div>
        <motion.div variants={textItemVariants} className="my-4 fs-19 fw-500">
          Delivering tailored services in design, deduction, and development to
          drive your business forward, enhance efficiency, and foster
          sustainable growth.
        </motion.div>
        <motion.button
          variants={textItemVariants}
          style={{
            borderRadius: "30px",
            backgroundColor: "#FFD800",
            color: "#000",
            padding: "17px 50px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        className="fs-13 txt-00 fw-500 d-flex flex-wrap gap-3 align-items-center justify-content-center"
        style={{ maxWidth: "590px" }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div
          style={{
            backgroundColor: "#FFD800",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          market research & analysis
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFF",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          Mobile app Development
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFF",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          Visual design
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFD800",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          Brand identity design{" "}
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFD800",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          Brand positioning
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFF",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          ui/ux design
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFD800",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          cx management
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "#FFF",
            padding: "14px 39px",
            borderRadius: "23px",
            width: "fit-content",
          }}
          variants={bubbleVariants}
        >
          Website Development
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServicesHero;
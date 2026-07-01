import { motion } from "framer-motion";
import intro from "../../../assets/videos/Intro.mp4";

function WhatWeOffer() {
  // Define animation variants for the sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Define animation variants for the individual text and video elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="gap-3 mt-5 d-flex align-items-center justify-content-between flex-column flex-lg-row"
      initial="hidden"
      whileInView="visible"
      // This setting makes the animation play every time the element is scrolled into view.
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="txt-ff">
        {/* Videos that Hold Attention Section */}
        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="txt-ffd">
            <b>Videos that Hold Attention</b>
          </h2>
          <div className="fs-16">
            Keep your audience watching till the end—more engagement, more
            clicks, more conversions.
            <br />
            Grab attention with fast-paced, high-retention edits tailored to
            short-form platforms.
            <br />
            Turn casual viewers into loyal fans with edits that match your
            voice, energy, and vision.
          </div>
        </motion.div>
        <div>
          {" "}
          <br /> <br />
        </div>
        {/* Websites that Drive Conversions Section */}
        <motion.div variants={itemVariants} className="mb-5 ">
          <h2 className="txt-ffd">
            <b>Websites that Drive Conversions</b>
          </h2>
          <div className="fs-16">
            Turn visitors into customers with sites designed for speed, clarity,
            and mobile-first behavior.
            <br />
            Cut the fluff, keep the sale—only what works, optimized for action.
            <br />
            Brand-aligned user journeys that feel intuitive and intentional from
            first click to checkout.
          </div>
        </motion.div>
        <div>
          {" "}
          <br /> <br />
        </div>
        {/* Apps that Make Life Easier Section */}
        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="txt-ffd">
            <b>Apps that Make Life Easier</b>
          </h2>
          <div className="fs-16">
            Custom solutions built around real-world use cases—not generic
            templates.
            <br />
            Scalable and smart—apps that evolve with your needs.
            <br />
            Productivity-first interfaces that prioritize user ease and workflow
            efficiency.
          </div>
        </motion.div>
        <div>
          {" "}
          <br /> <br />
        </div>
        {/* Gain Brand Clarity Section */}
        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="txt-ffd">
            <b>Gain Brand Clarity</b>
          </h2>
          <div className="fs-16">
            Get a clear strategy for representing your brand across products,
            messaging, and audience.
          </div>
        </motion.div>
        <div>
          {" "}
          <br /> <br />
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className=""
      >
        <video style={{ width: "300px", borderRadius: "25px" }} width="750" height="500" autoPlay loop muted>
          <source src={intro} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}

export default WhatWeOffer;

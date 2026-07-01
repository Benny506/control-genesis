import { useState } from "react";
import CustomSvg from "../../customSvg/CustomSvg";
import "./faq.css";
import { motion } from "framer-motion";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, ensuring impactful, high-quality results.",
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, ensuring impactful, high-quality results.",
    },
    {
      question: "How long does a typical project take?",
      answer: "We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, ensuring impactful, high-quality results.",
    },
    {
      question: "Do you offer SEO and digital marketing services?",
      answer: "We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, ensuring impactful, high-quality results.",
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, ensuring impactful, high-quality results.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="mt-5 txt-ff"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div style={{ maxWidth: "454px", margin: "auto", textAlign: "center" }}>
        <div className="d-flex align-items-center justify-content-center">
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
          <motion.div variants={itemVariants} className="fs-19 fw-500">
            FAQs
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="fs-45 fw-600 mb-5">
          Have Inquiries? Find Answers Here.
        </motion.div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="collapseMargin bg-22"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
            variants={itemVariants}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">{item.question}</div>
              <motion.div
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <CustomSvg name="plus" />
              </motion.div>
            </div>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 fs-19 fw-400 txt-f5"
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Faq;
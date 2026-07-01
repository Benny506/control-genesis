import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuMessageSquare } from "react-icons/lu";
import { RiBuilding2Line } from "react-icons/ri";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  businessType: Yup.string().required("Business Type is required"),
  message: Yup.string().required("Message is required"),
});

function Contact() {
  return (
    <div className="container py-5 my-5">
      <div className="p-4 p-md-5 rounded-4 shadow-lg mx-auto" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '800px', backdropFilter: 'blur(10px)' }}>
        <h2 className="txt-ff fw-700 ff-gro text-center mb-2">Ready for <span className="txt-ffd">Genesis?</span></h2>
        <p className="txt-f5 text-center mb-5">Apply for a free initial consultation call.</p>
        
        <Formik
          initialValues={{ name: "", email: "", message: "", businessType: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form values", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="d-flex flex-column gap-4">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="position-relative">
                    <CgProfile size="20" className="position-absolute" style={{ color: '#fff', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
                    <Field type="text" name="name" placeholder="Name" className="form-control bg-transparent text-white" style={{ paddingLeft: '45px', border: '1px solid #444', borderRadius: '10px' }} />
                  </div>
                  <ErrorMessage name="name" component="div" className="text-danger mt-1 text-tiny" />
                </div>
                
                <div className="col-12 col-md-6">
                  <div className="position-relative">
                    <MdEmail size="20" className="position-absolute" style={{ color: '#fff', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
                    <Field type="email" name="email" placeholder="Email" className="form-control bg-transparent text-white" style={{ paddingLeft: '45px', border: '1px solid #444', borderRadius: '10px' }} />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-danger mt-1 text-tiny" />
                </div>
              </div>

              <div className="position-relative">
                <RiBuilding2Line size="20" className="position-absolute" style={{ color: '#fff', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
                <Field type="text" name="businessType" placeholder="Business Type" className="form-control bg-transparent text-white" style={{ paddingLeft: '45px', border: '1px solid #444', borderRadius: '10px' }} />
              </div>
              <ErrorMessage name="businessType" component="div" className="text-danger mt-1 text-tiny" />

              <div className="position-relative">
                <LuMessageSquare size="20" className="position-absolute" style={{ color: '#fff', left: '15px', top: '15px' }} />
                <Field as="textarea" name="message" placeholder="Tell us about your project" rows="4" className="form-control bg-transparent text-white" style={{ paddingLeft: '45px', border: '1px solid #444', borderRadius: '10px' }} />
              </div>
              <ErrorMessage name="message" component="div" className="text-danger mt-1 text-tiny" />

              <button type="submit" disabled={isSubmitting} className="btn w-100 mt-2 fw-600" style={{ background: '#FFD800', color: '#000', borderRadius: '10px', padding: '12px' }}>
                Submit Application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;

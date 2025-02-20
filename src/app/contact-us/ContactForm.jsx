"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/lib/api";
import { notifySuccess, notifyError } from "../utils/toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  name: Yup.string().required().min(6).label("name"),
  phone: Yup.string().required().min(10).label("phone"),
  email: Yup.string().email().required().label("email"),
  subject: Yup.string().required().min(10).label("subject"),
  message: Yup.string().required().min(50).label("message"),
});

const ContactForm = ({ isAddStyle, setPopup, showCloseButton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const [capValue, setCapValue] = useState();
  const onCaptchaChange = (value) => {
    if (error) setError(false);
    setCapValue(value);
  };

  const onSubmitHandler = async (data) => {
    try {
      setLoading(true);
      await sendContactForm(data);
      setLoading(false);
      reset();
      router.push("/thank-you");

      if (setPopup) setPopup(false);
      console.log(setPopup);
    } catch (error) {
      setLoading(false);
      console.log(error);
      notifyError("Error while submitting the form, try later");
    }
  };

  const onSubmitWithCaptchaCheck = (e) => {
    e.preventDefault();

    // Check if captcha is verified
    if (!capValue) {
      setError("Please verify the captcha");
      return;
    }

    // If captcha is verified, call handleSubmit
    handleSubmit(onSubmitHandler)(e);
  };

  return (
    <div
      className={`col-lg-7 wow animate fadeInUp ${isAddStyle && "temp"}`}
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="contact-form-wrap">
        <div className="contact-form-area">
          <p style={{ fontWeight: "bold" }}>Your Success Starts Here!</p>

          <form onSubmit={onSubmitWithCaptchaCheck}>
            <div className="row">
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Name*</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Full Name"
                  />
                  <p style={{ color: "#f56565" }}>{errors.name?.message}</p>
                </div>
              </div>
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Phone *</label>
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="+91 9XXXXXXX56"
                  />
                </div>
                <p style={{ color: "#f56565" }}>{errors.phone?.message}</p>
              </div>
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label> Email *</label>
                  <input
                    {...register("email")}
                    placeholder="abc@gmail.com"
                    type="email"
                  />
                  <p style={{ color: "#f56565" }}>{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-lg-6 mb-16">
                <div className="form-inner">
                  <label>Subject *</label>
                  <input
                    placeholder="Write you subject in detail"
                    {...register("subject")}
                    type="text"
                  />
                  <p style={{ color: "#f56565" }}>{errors.subject?.message}</p>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="form-inner">
                  <label>Message *</label>
                  <textarea
                    style={{ height: "20px" }}
                    {...register("message")}
                    defaultValue={""}
                  />
                  <p style={{ color: "#f56565" }}>{errors.message?.message}</p>
                </div>
              </div>
              <div className="d-flex mt-2 mb-2 flex-column align-items-center">
                <ReCAPTCHA
                  sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}`}
                  onChange={onCaptchaChange}
                />
                {<p style={{ color: "#f56565" }}>{error}</p>}
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <button
                    disabled={loading}
                    className="primary-btn2"
                    type="submit"
                    data-text={!loading ? "Submit Now" : "Submitting..."}
                  >
                    <span>{!loading ? "Submit Now" : "Submitting..."}</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showCloseButton ? (
        <button id={"closeButton"} onClick={() => setPopup(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
      ) : null}
    </div>
  );
};

export default ContactForm;

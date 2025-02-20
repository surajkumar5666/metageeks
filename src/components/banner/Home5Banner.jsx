"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
// import BlockContent from "@sanity/block-content-to-react";
import TypewriterEffect from "./TypeWriterEffect";
import GetInTouch from "./GetInTouch";

const Home5Banner = () => {
  const [getInTouchPopup, setPopup] = useState(false);

  return (
    <>
      <div className="home5-banner-section">
        <div className="scroll-down-btn">
          <a href="#partnership-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={19}
              height={29}
              viewBox="0 0 19 29"
            >
              <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
            </svg>
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="banner-content text-center">
                <span
                  className="sub-title5"
                  style={{
                    fontSize: "11px",
                    marginTop: "-30px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Rapid Development | Consistent Quality
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2 style={{ fontWeight: "bold" }}>
                  Idea to Enterprise Software.{" "}
                  {/* <div style={{ whiteSpace: "nowrap" }}></div> */}
                </h2>
                <h1 id="bannerHeading">
                  <span className="_span">Leading</span> <TypewriterEffect />
                  <br className="headingBreak" /> Development Company
                </h1>
                <p>
                  Welcome to Metageeks Technologies, With our commitment to
                  innovation and cutting-edge technology, we empower businesses
                  to thrive in the rapidly evolving digital landscape. Explore
                  our passion for excellence and discover how we can turn your
                  visions into reality faster than ever before.
                </p>
                <div className="banner-content-bottom">
                  <button
                    onClick={() => setPopup(true)}
                    className="primary-btn5 two"
                  >
                    Get in Touch
                  </button>
                  {/* <div>
                    <a
                      target="_blank"
                      href="https://www.goodfirms.co/company/metageeks-technologies-pvt-ltd"
                    >
                      <img
                        style={{ width: "100px" }}
                        src="https://assets.goodfirms.co/badges/color-badge/artificial-intelligence.svg"
                        title=" Company"
                        alt=" Company"
                      />
                    </a>
                  </div> */}
                  {/* <a href="https://clutch.co" className="rating-area">
                      <div className="review">
                        <span>Review On</span>
                        <img
                          className="logo-dark"
                          src="assets/img/home1/icon/clutch-logo.svg"
                          alt=""
                        />
                        <img
                          className="logo-light"
                          src="assets/img/home1/icon/clutch-logo-white.svg"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a> */}
                  {/* <div
                    className="clutch-widget"
                    data-url="https://widget.clutch.co"
                    data-widget-type="2"
                    data-height="45"
                    data-nofollow="true"
                    data-expandifr="true"
                    data-scale="100"
                    data-clutchcompany-id="2251045"
                  ></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="banner-bottom-section d-lg-flex d-none">
            <div className="wrapper">
              <div className="video-info">
                <div className="video-intro">
                  <input
                    id="video_check1"
                    className="videoInput"
                    type="checkbox"
                  />
                  <div className="video">
                    <video
                      src={
                        "https://videos.pexels.com/video-files/6804109/6804109-uhd_4096_2160_25fps.mp4" ||
                        "assets/video/production_.mp4"
                      }
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-img d-xl-flex d-none">
              <img
                src={
                  "https://zenfy-next-js.vercel.app/assets/img/home5/banner-img.jpg" ||
                  "assets/img/home5/banner-img.jpg"
                }
                alt="banner-img"
              />
            </div>
          </div>
        </div>
      </div>
      {getInTouchPopup ? <GetInTouch setPopup={setPopup} /> : null}
    </>
  );
};

export default Home5Banner;

import Link from "next/link";
import React from "react";

const Footer5 = () => {
  return (
    <>
      <footer>
        <div className="home4-footer-section style-2">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-11">
                <div className="home4-footer-wrap">
                  <div className="footer-top">
                    <div className="row g-lg-4 gy-5 justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget">
                          <div className="footer-logo">
                            <Link href="/" className="logo-dark">
                              <img src="/assets/img/logo.png" alt="" />
                            </Link>
                            <Link href="/" className="logo-light">
                              <img src="/assets/img/logo.png" alt="" />
                            </Link>
                          </div>
                          <div className="footer-contact-area">
                            <h6>India Office</h6>
                            <a href="#">
                              55, 2nd Lane, Westend Marg
                              <br /> Saidullajab, Saket
                              <br /> New Delhi - 110030
                            </a>
                          </div>
                          <div className="social-area">
                            <h6>Follow Us!</h6>
                            <ul className="social-list">
                              <li>
                                <a
                                  href="https://www.linkedin.com/company/metageekstech"
                                  target="_blank"
                                >
                                  <i className="bi bi-linkedin" />
                                  <span>LinkedIn</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.facebook.com/metageeks.tech"
                                  target="_blank"
                                >
                                  <i className="bi bi-facebook" />
                                  <span>Facebook</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/metageeks_tech"
                                  target="_blank"
                                >
                                  <i className="bi bi-twitter-x" />
                                  <span>Twitter</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/metageeks.tech/"
                                  target="_blank"
                                >
                                  <i className="bi bi-instagram" />
                                  <span>Instagram</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/channel/UC8JKaWzL5azbclD8anmsMxQ"
                                  target="_blank"
                                >
                                  <i className="bi bi-youtube" />
                                  <span>YouTube</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                        <div className="footer-widget">
                          <div className="widget-title">
                            <h4>Solutions</h4>
                          </div>
                          <div className="menu-container">
                            <ul className="widget-list">
                              <li>
                                <Link href="/service/service-details">
                                  Brand Identity{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Graphic Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Web Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/service-details">
                                  Video Production
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                        <div className="footer-widget">
                          <div className="widget-title">
                            <h4>Company</h4>
                          </div>
                          <div className="menu-container">
                            <ul className="widget-list">
                              <li>
                                <Link href="/about-us">About us</Link>
                              </li>
                              <li>
                                <Link href="/case-study">Case Study</Link>
                              </li>
                              <li>
                                <Link href="/blog">Blogs</Link>
                              </li>
                              <li>
                                <Link href="/pricing-plan">Pricing</Link>
                              </li>
                              <li>
                                <Link href="/contact-us">Contact Us</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget">
                          <div className="footer-author-area">
                            <div className="author-img">
                              <img
                                src="/assets/img/home4/footer-author-img.png"
                                alt=""
                              />
                            </div>
                            <div className="author-content">
                              <div className="author-name-desig">
                                <h6>Mr. Daniel Scoot</h6>
                                <span>Founder / MetaGeeks</span>
                              </div>
                              <p>
                                We're dedicated to find the right solution for
                                you.
                              </p>
                              <Link href="/blog" className="details-button">
                                Get In Touch
                                <svg viewBox="0 0 13 20">
                                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <div className="copyright-area">
                      <p>
                        Copyright 2024 |{" "}
                        <a href="#">Metageeks Technologies Pvt Ltd</a>
                      </p>
                    </div>
                    <div className="footer-bottom-right">
                      <ul>
                        <li>
                          <a href="#">Support Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-1 d-xl-block d-none">
                <div className="contact-area">
                  <h2>
                    <a href="mailto:info@metageeks.tech">info@metageeks.tech</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer5;

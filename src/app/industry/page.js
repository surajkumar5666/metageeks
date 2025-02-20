"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getPost = async (page, pageSize, searchTerm = "") => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  // Escape special characters in the search term to prevent GROQ injection
  const escapedSearchTerm = searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  const query = `
    *[_type == "industry"]
  `;

  const response = await client.fetch(query);
  console.log(response);
  return response;
};

const IndustryPage = () => {
  useWow();
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);

  const totalPosts = posts[0]?.totalPosts;
  const pageSize = 3;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const setPageNumber = (page) => {
    setPage(page);
  };
  const handleNextPage = () => {
    console.log(page, totalPages);
    if (totalPages > page) setPage((prev) => prev + 1);
  };

  const fetchData = async (value) => {
    const response = await getPost(page, pageSize, value ? value : "");
    setPosts(response);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <MainLayout>
      <div
        className="industry-card-section scroll-margin pt-120 mb-120"
        id="industry-card-section"
      >
        <div className="container">
          <div className="row g-4 mb-4">
            {posts.map((post, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="industry-card">
                  <div className="industry-img">
                    <Link href={`/industry/${post.slug.current}`}>
                      <img src="/assets/img/home5/industry-01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="industry-content">
                    <div className="industry-meta">
                      <ul className="category">
                        <Link href={`/industry/${post.slug.current}`}>
                          {post.category}
                        </Link>
                      </ul>
                    </div>
                    <h5>
                      <Link href={`/industry/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="pagination-area">
                <ul className="paginations">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      style={{ cursor: "pointer" }}
                      onClick={() => setPageNumber(i + 1)}
                      className={`page-item ${page === i + 1 ? "active" : ""}`}
                    >
                      <a>{i + 1}</a>
                    </li>
                  ))}
                  <li
                    onClick={handleNextPage}
                    style={{ cursor: "pointer" }}
                    className="page-item paginations-button"
                  >
                    <a>
                      NXT
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                      >
                        <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home1-about-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  How We Do
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  How to Find an Industry Expertise{" "}
                  <span> for IT Professionals.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bottom-area">
          <div className="container-fluid">
            <div className="row g-5">
              <div
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Expertise and Innovation</h4>
                    <p>
                      We pride ourselves staying at the front of innovation,
                      constantly pushing boundaries a redefining what's
                      possible.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon2.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Transparent Process</h4>
                    <p>
                      Our transparent process is designed to demystify the
                      journey from concept to delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon3.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Client-Centric Approach</h4>
                    <p>
                      Our dedicated team takes the time to listen, &amp;
                      collaborate, ensuring that every interaction a step
                      towards your success.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon4.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Cost-Effective</h4>
                    <p>
                      Our commitment to providing cost-effective solutions is
                      ingrained in our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustryPage;

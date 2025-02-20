"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

const getCaseStudies = async (page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  const query = `
    *[_type=="caseStudy"]{

    title,
    slug,
    description,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    category,
    "totalPosts": count(*[_type=="caseStudy"])
  }[${start}...${end}]
    `;

  const response = await client.fetch(query);
  return response;
};

const CaseStudyPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  const [page, setPage] = useState(1);
  const totalPosts = caseStudies[0]?.totalPosts;
  const pageSize = 3;

  const totalPages = Math.ceil(totalPosts / pageSize);

  const setPageNumber = (page) => {
    setPage(page);
  };
  const handleNextPage = () => {
    console.log(page, totalPages);
    if (totalPages > page) setPage((prev) => prev + 1);
  };

  useEffect(() => {
    getCaseStudies(page, pageSize).then((data) => {
      setCaseStudies(data);
    });
  }, [page]);

  useWow(caseStudies);

  return (
    <MainLayout>
      <div
        className="case-study-card-section scroll-margin pt-120 mb-120"
        id="case-study-card-section"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            {[
              ...caseStudies,
              // ...caseStudies,
              // ...caseStudies,
              // ...caseStudies,
            ]?.map((caseStudy, index) => (
              <div
                key={caseStudy.slug.current}
                className="col-xl-4 col-md-6 wow animate fadeInDown"
                data-wow-delay={`${(index + 1) * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div className="case-study-card style-2">
                  <div className="card-img">
                    <img
                      src={
                        caseStudy
                          ? urlForImage(caseStudy?.mainImage).url()
                          : "/assets/img/innerpage/case-study-img1.jpg"
                      }
                      alt={caseStudy?.mainImageAlt}
                    />
                  </div>
                  <div className="card-content">
                    <Link href={`/case-study/${caseStudy.slug.current}`}>
                      {caseStudy.category}
                    </Link>
                    <h4>
                      <Link href={`/case-study/${caseStudy.slug.current}`}>
                        {caseStudy.title}
                      </Link>
                    </h4>
                    <p>{caseStudy.description.slice(0, 100)}...</p>
                    <Link
                      href={`/case-study/${caseStudy.slug.current}`}
                      className="learn-more-btn"
                    >
                      Learn MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={17}
                        height={9}
                        viewBox="0 0 17 9"
                      >
                        <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                        <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* pagination */}
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
                        className={`page-item ${
                          page === i + 1 ? "active" : ""
                        }`}
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
      </div>
    </MainLayout>
  );
};

export default CaseStudyPage;

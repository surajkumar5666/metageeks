"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React, { useEffect } from "react";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { usePathname } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { slugify } from "@/app/utils/helpers";
import { richTextStyles } from "@/app/blog/[slug]/page";
import { myPortableTextComponents } from "@/app/blog/[slug]/page";

const getCaseStudy = async (slug) => {
  // const start = (page - 1) * pageSize;
  // const end = page * pageSize;
  // hello
  const query = `
  {
  "caseStudy": *[_type=="caseStudy" && slug.current=="${slug}"]{
      title,
      slug,
      description,
      client,
      industry,
      stack,
      content,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      category
    }[0],
    "recommendedCaseStudies": *[_type=="caseStudy" && slug.current != "${slug}"][0...3]{
      title,
    slug,
    description,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    category
    }
}
    `;

  const response = await client.fetch(query);
  console.log(response);
  return response;
};

const CaseStudyDetails = () => {
  useWow();

  const [caseStudy, setCaseStudy] = React.useState(null);
  const [recommendedCaseStudies, setRecommendedCaseStudies] = React.useState(
    []
  );
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  useEffect(() => {
    getCaseStudy(slug).then((data) => {
      setCaseStudy(data.caseStudy);
      setRecommendedCaseStudies(data.recommendedCaseStudies);
    });
  }, []);

  console.log(recommendedCaseStudies);

  return (
    <MainLayout>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>{"Case Study"}</li>
                  </ul>
                  <h1>{caseStudy?.title}</h1>
                </div>
                <div className="scroll-down-btn">
                  <a href={"#case-details-section"}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="case-study-details-page pt-120 mb-120"
        id="case-details-section"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-80 ">
            <div className="col-lg-8">
              <div className="case-thumb">
                <img
                  src={
                    caseStudy
                      ? urlForImage(caseStudy?.mainImage).url()
                      : "/assets/img/innerpage/case-thumb.jpg"
                  }
                  alt={caseStudy?.mainImageAlt}
                />
              </div>
              <div className="case-details-content">
                <div className={richTextStyles}>
                  <PortableText
                    value={caseStudy?.content}
                    components={myPortableTextComponents}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="case-sidebar">
                <div className="case-info-wrap mb-40">
                  <h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M4.06197 17.9316C3.62773 18.1692 3.13498 17.7528 3.22273 17.2212L4.15647 11.5454L0.19311 7.51835C-0.177014 7.14156 0.0153601 6.45279 0.511484 6.37839L6.02172 5.54322L8.47871 0.350988C8.70034 -0.116996 9.29996 -0.116996 9.52158 0.350988L11.9786 5.54322L17.4888 6.37839C17.9849 6.45279 18.1773 7.14156 17.8061 7.51835L13.8438 11.5454L14.7776 17.2212C14.8653 17.7528 14.3726 18.1692 13.9383 17.9316L8.99846 15.2245L4.06197 17.9316Z" />
                    </svg>{" "}
                    Case Study Info
                  </h4>
                  <ul className="case-info">
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Category:</span>
                        <h5>{caseStudy?.category}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Client:</span>
                        <h5>{caseStudy?.client}</h5>
                      </div>
                    </li>
                    {/*<li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Location:</span>
                        <h5>{caseStudy?.location}</h5>
                      </div>
                </li>*/}
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Industry:</span>
                        <h5>{caseStudy?.industry}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Stack:</span>
                        <h5>{caseStudy?.stack}</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social-share-area">
                  <h4>Social Share</h4>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/case-study/${slug}`}
                      >
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u="
                        target="_blank"
                      >
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=Here is a great case study by @MetaGeeks_tech . \n ${caseStudy?.title}&url=/case-study/${slug}`}
                      >
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relatate-case-study-section mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12">
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
                  Case Study
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
                  See More <span>Case Studies.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {recommendedCaseStudies?.map((caseStudy, index) => (
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
            {/* <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img1.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Startup Company</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Navigating Growth A Startup Agency Success Story.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
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
            <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img2.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Design Agency</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Customer Centric Strategies Acquiring Retaining.
                    </Link>
                  </h4>
                  <p>
                    This case study unveils the strategic roadmap, the
                    technology stack deployed, and the tangible benefits reaped
                    by Egenslab.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
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
            <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img3.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Digital Transformation</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Tech Breakthroughs Solution Pioneering Digital Age.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
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
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseStudyDetails;

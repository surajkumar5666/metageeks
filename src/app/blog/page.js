"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import RecentPost from "./RecentPost";

const getPost = async (page, pageSize, searchTerm = "") => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  // Escape special characters in the search term to prevent GROQ injection
  const escapedSearchTerm = searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  const query = `
    *[_type == "blog" && (
      title match "${escapedSearchTerm}*" ||
      "${escapedSearchTerm}" in tags
    )]{
      title,
      slug,
      description,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      category,
      date,
      tags,
      "totalPosts": count(*[_type == "blog" && (
        title match "${escapedSearchTerm}*" ||
        "${escapedSearchTerm}" in tags
      )])
    }[${start}...${end}]
  `;

  const response = await client.fetch(query);
  console.log(response);
  return response;
};

const getLatestPost = async () => {
  const query = `
    *[_type=="blog"] | order(date desc) [0...3]{
  
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    date,
  }
  
    `;

  const response = await client.fetch(query);
  return response;
};

const getTrendingTags = async () => {
  const query = `
    *[_type == "blog"]{
      tags
    }
  `;

  const posts = await client.fetch(query);

  // Aggregate tag counts
  const tagCounts = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  // Convert tagCounts to an array and sort by count in descending order
  const sortedTags = Object.keys(tagCounts)
    .map((tag) => ({
      tag,
      count: tagCounts[tag],
    }))
    .sort((a, b) => b.count - a.count);

  // console.log(sortedTags);
  return sortedTags.slice(0, 8);
};

const BlogStandardPage = () => {
  useWow();

  const [posts, setPosts] = useState([]);
  const [trendingTags, setSetTrendingTags] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
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

  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPost = async () => {
      const response = await getLatestPost();
      setLatestPosts(response);
    };
    fetchLatestPost();
  }, []);

  const fetchData = async (value) => {
    const response = await getPost(page, pageSize, value ? value : searchTerm);
    setPosts(response);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await getTrendingTags();
      setSetTrendingTags(response);
    };
    fetchTags();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchData();
  };
  const handleTagSearch = async (value) => {
    await fetchData(value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await fetchData();
    }
  };

  return (
    <MainLayout>
      <div
        className="blog-standard-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              {posts.map((post) => (
                <div
                  key={post.slug.current}
                  className="blog-card2 style-3 mb-50 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="card-img"
                    >
                      <img
                        src={
                          post
                            ? urlForImage(post?.mainImage).url()
                            : "/assets/img/innerpage/blog-details-thumb-img.jpg"
                        }
                        alt={post?.mainImageAlt}
                      />
                    </Link>
                    <Link href={`/blog/${post.slug.current}`} className="date">
                      <span>
                        <strong>{new Date(post?.date).getDay()}</strong>{" "}
                        {monthNames[new Date(post?.date).getMonth()]}
                      </span>
                    </Link>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      <div className="blog-meta">
                        <ul className="category">
                          <li>
                            <Link href={`/blog/${post.slug.current}`}>
                              {post.category}
                            </Link>
                          </li>
                        </ul>
                        <div className="blog-comment">
                          <span>Comment (20)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href={`/blog/${post.slug.current}`}>
                          {post.title}
                        </Link>
                      </h4>
                      <p>{post.description}</p>
                    </div>
                    <div className="star-btn">
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="bg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={136}
                            height={90}
                            viewBox="0 0 136 90"
                          >
                            <path d="M66.4566 1.09581C67.4534 0.731877 68.5466 0.731878 69.5434 1.09581L76.72 3.71616C77.5489 4.0188 78.4384 4.11757 79.3135 4.00413L87.4541 2.94882C88.5725 2.80382 89.7047 3.0841 90.6263 3.73416L95.7198 7.32676C96.5294 7.89783 97.4783 8.23958 98.4661 8.31592L106.177 8.91181C107.512 9.01497 108.732 9.70716 109.505 10.8003L111.973 14.2907C112.681 15.2926 113.704 16.0288 114.88 16.3822L120.746 18.1466C122.366 18.6337 123.575 19.9876 123.878 21.6515L124.28 23.8681C124.563 25.4218 125.499 26.7793 126.852 27.5948L130.028 29.5102C131.794 30.575 132.61 32.7035 132.009 34.6758L131.703 35.6784C131.154 37.4793 131.565 39.4358 132.791 40.8644L133.825 42.0689C135.272 43.7549 135.272 46.2451 133.825 47.9311L132.791 49.1356C131.564 50.5642 131.154 52.5207 131.703 54.3216L132.009 55.3242C132.61 57.2965 131.794 59.425 130.028 60.4898L126.851 62.4052C125.499 63.2207 124.563 64.5782 124.28 66.1319L123.878 68.3485C123.575 70.0124 122.366 71.3663 120.746 71.8534L114.88 73.6178C113.704 73.9712 112.681 74.7074 111.973 75.7093L109.505 79.1997C108.732 80.2928 107.512 80.985 106.177 81.0882L98.4661 81.6841C97.4783 81.7604 96.5294 82.1022 95.7198 82.6732L90.6263 86.2658C89.7047 86.9159 88.5725 87.1962 87.4541 87.0512L79.3135 85.9959C78.4384 85.8824 77.5489 85.9812 76.72 86.2838L69.5434 88.9042C68.5466 89.2681 67.4534 89.2681 66.4566 88.9042L59.28 86.2838C58.4511 85.9812 57.5616 85.8824 56.6865 85.9959L48.5459 87.0512C47.4275 87.1962 46.2953 86.9159 45.3737 86.2658L40.2802 82.6732C39.4706 82.1022 38.5217 81.7604 37.5339 81.6841L29.8227 81.0882C28.4878 80.985 27.2682 80.2928 26.4952 79.1997L24.0271 75.7093C23.3186 74.7074 22.2955 73.9712 21.1205 73.6178L15.2539 71.8534C13.6344 71.3663 12.4248 70.0124 12.1224 68.3485L11.7197 66.132C11.4374 64.5782 10.5009 63.2207 9.14851 62.4052L5.97213 60.4898C4.20646 59.425 3.39029 57.2965 3.99142 55.3242L4.297 54.3216C4.8459 52.5207 4.43549 50.5642 3.20917 49.1356L2.17516 47.9311C0.727774 46.2451 0.727773 43.7549 2.17516 42.0689L3.20917 40.8644C4.43549 39.4358 4.8459 37.4793 4.297 35.6784L3.99142 34.6758C3.39029 32.7035 4.20646 30.575 5.97213 29.5102L9.14851 27.5948C10.5009 26.7793 11.4374 25.4218 11.7197 23.8681L12.1224 21.6515C12.4248 19.9876 13.6344 18.6337 15.2539 18.1466L21.1205 16.3822C22.2955 16.0288 23.3186 15.2926 24.0271 14.2907L26.4952 10.8003C27.2682 9.70716 28.4878 9.01497 29.8227 8.91181L37.5339 8.31592C38.5217 8.23958 39.4706 7.89783 40.2802 7.32676L45.3737 3.73416C46.2953 3.0841 47.4275 2.80382 48.5459 2.94882L56.6865 4.00413C57.5616 4.11757 58.4511 4.0188 59.28 3.71616L66.4566 1.09581Z" />
                          </svg>
                        </div>
                        <div className="details-button">
                          Read More
                          <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

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
            <div
              className="col-lg-4 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input
                        type="text"
                        value={searchTerm}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Here"
                      />
                      <button onClick={handleSearch}>
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                    {trendingTags.map((tagObj, index) => {
                      return (
                        <li key={tagObj.tag}>
                          <Link
                            href={""}
                            onClick={(event) => {
                              event.preventDefault();
                              handleTagSearch(tagObj.tag);
                            }}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={14}
                                viewBox="0 0 13 14"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                                />
                              </svg>
                              {tagObj.tag}
                            </span>
                            <span>({tagObj.count})</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Recent Post </h5>
                  {latestPosts.map((post, index) => {
                    return <RecentPost key={post.title} post={post} />;
                  })}
                </div>
                {/* <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/blog">Creative</Link>
                    </li>
                    <li>
                      <Link href="/blog">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/blog">Software</Link>
                    </li>
                    <li>
                      <Link href="/blog">Industry</Link>
                    </li>
                    <li>
                      <Link href="/blog">Marketing</Link>
                    </li>
                    <li>
                      <Link href="/blog">Product</Link>
                    </li>
                    <li>
                      <Link href="/blog">Optimization</Link>
                    </li>
                    <li>
                      <Link href="/blog">Graphic</Link>
                    </li>
                    <li>
                      <Link href="/blog">Natural</Link>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_APP_URL}`}
                      >
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_APP_URL}`}
                        target="_blank"
                      >
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=""`}
                      >
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogStandardPage;
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

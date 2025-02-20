"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
// import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { slugify } from "@/app/utils/helpers";
import { usePathname } from "next/navigation";
import RecentPost from "@/app/blog/RecentPost";

async function getPost(slug) {
  const query = `
    *[_type=="industry" && slug.current=="${slug}"]{
  
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
    content,
    tags,
   relatedCaseStudies ->{
      title,
      slug,
      mainImage,
      mainImageAlt,
    }
  } 
  `;

  const response = await client.fetch(query);
  return response[0];
}
4;
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

const IndustryPage = () => {
  useWow();
  const [post, setPost] = React.useState(null);
  const pathName = usePathname();
  const slug = pathName.split("/")[2];

  useEffect(() => {
    getPost(slug).then((data) => {
      setPost(data);
    });
  }, []);

  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    const fetchLatestPost = async () => {
      const response = await getLatestPost();
      setLatestPosts(response);
    };
    fetchLatestPost();
  }, []);

  console.log(post, "post");

  return (
    <>
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
                      <li>{"Industry Details"}</li>
                    </ul>
                    <h1>{post?.title}</h1>
                  </div>
                  <div className="scroll-down-btn">
                    <a href={"#blog-details"}>
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
          className="blog-details scroll-margin pt-120 mb-120 style-6"
          id="blog-details"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-details-thumb">
                  <img
                    src={
                      post
                        ? ""
                        : "/assets/img/innerpage/blog-details-thumb-img.jpg"
                    }
                    alt={post?.mainImageAlt}
                  />
                </div>
              </div>
            </div>

            <div className="row g-lg-4 gy-5 mb-100">
              <div className="col-lg-8">
                <div className="blog-details-content mb-0">
                  <p className="first-para mb-20">{post?.description}</p>
                  <div className={richTextStyles}>
                    <PortableText
                      value={post?.content}
                      components={myPortableTextComponents}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-area">
                  <div className="single-widget mb-30">
                    <h5 className="widget-title">Related Case Study </h5>
                    <div>
                      <img
                        src={post?.relatedCaseStudies?.mainImage}
                        alt={post?.relatedCaseStudies?.mainImageAlt}
                      ></img>
                      <h6>
                        <Link
                          href={`/case-study/${post?.relatedCaseStudies?.slug?.current}`}
                        >
                          {post?.relatedCaseStudies?.title}
                        </Link>
                      </h6>
                      <p>{post?.relatedCaseStudies?.description}</p>
                    </div>
                  </div>
                  <div className="single-widget mb-30">
                    <h5 className="widget-title">Recent Post </h5>
                    {latestPosts.map((post, index) => {
                      return <RecentPost key={post.title} post={post} />;
                    })}
                  </div>
                  <div className="single-widget mb-30">
                    <h5 className="widget-title">Releted Tags</h5>
                    <ul className="tag-list">
                      {post?.tags?.map((tag) => (
                        <li>
                          <Link href={""} onClick={(e) => e.preventDefault()}>
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-tag-and-social-area">
              <div className="blog-tag">
                <h6>Tag:</h6>
                <ul>
                  {post?.tags?.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default IndustryPage;

export const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        // src={urlForImage(value).url()}
        src={value.asset.url}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h2: ({ value }) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

export const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;

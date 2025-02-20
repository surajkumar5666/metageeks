import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const RecentPost = ({ post }) => {
  return (
    <div className="recent-post-widget mb-20">
      <div className="recent-post-img">
        <Link href={`/blog/${post.slug.current}`}>
          <img
            src={
              post
                ? urlForImage(post?.mainImage).url()
                : "/assets/img/innerpage/popular-post-img1.png"
            }
            alt={post?.mainImageAlt}
          />
        </Link>
      </div>
      <div className="recent-post-content">
        <Link href={`/blog/${post.slug.current}`}>
          {new Date(post?.date).toDateString()}
        </Link>
        <h6>
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h6>
      </div>
    </div>
  );
};

export default RecentPost;

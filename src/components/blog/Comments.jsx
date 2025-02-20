"use client";
import React, { useState, useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";

const Comments = ({ url, identifier, title }) => {
  const [commentCount, setCommentCount] = useState(null);

  const disqusShortname = "metageeks-1";
  const disqusApiKey = "YOUR_DISQUS_API_KEY"; // Replace with your Disqus API key

  useEffect(() => {
    const fetchCommentCount = async () => {
      try {
        const response = await fetch(
          `https://disqus.com/api/3.0/threads/set.json?api_key=${disqusApiKey}&forum=${disqusShortname}&thread=ident:${identifier}`
        );
        const data = await response.json();

        if (data.response.length > 0) {
          setCommentCount(data.response[0].posts);
        }
      } catch (error) {
        console.error("Error fetching comment count:", error);
      }
    };

    fetchCommentCount();
  }, [identifier]);

  const config = {
    url: url,
    identifier: identifier,
    title: title,
    language: "en",
  };
  return (
    <div>
      <DiscussionEmbed shortname="metageeks-1" config={config} />
      {commentCount !== null && <p>{commentCount} Comments</p>}
    </div>
  );
};

export default Comments;

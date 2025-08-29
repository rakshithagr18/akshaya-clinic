"use client";

import React, { useEffect, useState } from "react";
import BlogContent from "./BlogContent";
import { useParams } from "next/navigation";
import Blog from "@/components/Assets/Data/blog.json";
import { IBlog } from "@/utils/interfaces";

const Details = () => {
  const [data, setData] = useState<IBlog | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params?.blog_slug) {
      const current = Blog.find((doc) => doc.link === params.blog_slug) || null;
      setData(current as IBlog | null);
    }
  }, [params?.blog_slug]);

  return (
    <>
      <BlogContent data={data} />
    </>
  );
};

export default Details;

"use client";
import BlogCards from "@/components/pages/blog/blogdetails/BlogCards";

import Details from "@/components/pages/blog/blogdetails/Details";
import Banner from "@/components/ui/Banner";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Banner
        title=""
        para=""
        // noBG={false}
        titleColor="#000000"
        tag="h1"
        img="/assests/new/bannerimage3.png"
      /> */}
      <Details />

      <BlogCards />
    </>
  );
};

export default page;

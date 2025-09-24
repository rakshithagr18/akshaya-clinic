import BlogListing from "@/components/pages/blog/BlogListing";
import Banner from "@/components/ui/Banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Our Blog"
        para="Insights and Updates from the World of Medicine"
        // noBG={false}
        titleColor="#000000"
        tag="h1"
        img="/assests/new/cardiac science.png"
      />
      <BlogListing />
    </>
  );
};

export default page;

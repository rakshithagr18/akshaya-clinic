"use client";
import React from "react";
import Container from "../layout/Container"; // Make sure this exists in your project
import { IBannerProps } from "@/utils/interfaces"; // Adjust the import path as necessary
const Banner: React.FC<IBannerProps> = ({
  title,
  titleColor,
  tag: Tag = "h2",
  para,
  img,
  noBG,
}) => {
  return (
    <section
      className={`h-[300px] ${noBG ? "" : "bg-gray-100"} ${
        img ? "bg-cover bg-center bg-no-repeat" : ""
      }`}
      style={img ? { backgroundImage: `url(${img})` } : {}}
    >
      <Container width>
        <div className="flex flex-col  justify-center h-full ">
          <Tag
            style={titleColor ? { color: titleColor } : {}}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </Tag>
          <Tag style={titleColor ? { color: titleColor } : {}} className="">
            {para}
          </Tag>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

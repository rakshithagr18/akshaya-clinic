import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";
import BlogPost from "./BlogPost";
import BlogBtn from "./BlogBtn";
import blog from "@/components/Assets/Data/blog.json";

const BlogListing = () => {
  return (
    <section className="padding">
      <BlogBtn />
      <Container width>
        <section className="grid grid-cols-1 lg:grid-cols-[68%_30%] gap-6">
          {/* Blog Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {blog.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-full bg-white p-4 rounded-2xl shadow-md"
              >
                {/* Image */}
                <div className="w-full h-48 relative mb-3 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex gap-3 mb-2">
                    <div className="blogcardbtn">
                      <Link href="#">{item.btn1}</Link>
                    </div>
                    <div className="blogcardbtn">
                      <Link href="#">{item.btn2}</Link>
                    </div>
                  </div>

                  {/* Title & Paragraph */}
                  <div className="flex flex-col flex-1 mb-3">
                    <h2 className="subTitle mb-2 line-clamp-2">
                      {item.title} {/* e.g., "The Future of Healthcare Technology" */}
                    </h2>
                    <p className="text-sm flex-1 line-clamp-3">
                      {item.para}
                    </p>
                  </div>

                  {/* Read More aligned at bottom */}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${item.link}`}
                      className="flex items-center gap-2 text-[var(--secondary-light)]"
                    >
                      Read More <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Sidebar / BlogPost */}
          <BlogPost />
        </section>
      </Container>
    </section>
  );
};

export default BlogListing;

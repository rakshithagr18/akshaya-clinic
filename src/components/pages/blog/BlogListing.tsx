//container
import Container from "@/components/layout/Container";
//image
import Image from "next/image";
//link
import Link from "next/link";
//icon
import { FaLongArrowAltRight } from "react-icons/fa";
//import
import React from "react";
//blogpost
import BlogPost from "./BlogPost";
//blogbtn
import BlogBtn from "./BlogBtn";
//pagination
// import Pagination from "@/components/ui/Pagination";
//json
import blog from "@/components/Assets/Data/blog.json";

const BlogListing = () => {
  return (
    <section className="padding">
      <BlogBtn />
      <Container width>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[68%_30%] justify-between">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {blog.map((item, index) => (
              <div key={index} className="mb-3">
                <Image
                  src={item.image}
                  alt="logo"
                  width={300}
                  height={200}
                  className="w-full mb-3 rounded-2xl"
                />
                <div>
                  <div className="flex gap-3 mb-2">
                    <div className="blogcardbtn">
                      <Link href="#">{item.btn1}</Link>
                    </div>

                    <div className="blogcardbtn">
                      <Link href="#">{item.btn2}</Link>
                    </div>
                  </div>

                  <h2 className="subTitle">{item.title}</h2>
                  <p className="mb-3">{item.para}</p>

                  <div>
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

          <BlogPost />
        </section>
        {/* <Pagination /> */}
      </Container>
    </section>
  );
};

export default BlogListing;

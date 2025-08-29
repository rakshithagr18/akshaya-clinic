import Container from "@/components/layout/Container";
//link
import Link from "next/link";
//icon

import { CiSearch } from "react-icons/ci";
//json
import blogbtn from "@/components/Assets/Data/blogbtn.json";
import blog from "@/components/Assets/Data/blog.json";

import React from "react";

const BlogPost = () => {
  return (
    <section>
      <Container width>
        <section>
          <section className="relative w-full py-5 ">
            <input
              type="text"
              name="search"
              id="srch"
              placeholder="Search articles..."
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              <CiSearch size={20} />
            </span>
          </section>
          <section>
            <h2 className="subTitle">Recent Posts</h2>
            {blog.map((item) => (
              <div key={item.id} className="mb-4">
                <Link href={`/blog/${item.link}`}>
                  <p className=" mb-2">{item.title}</p>
                </Link>
              </div>
            ))}
          </section>
          <section className="mb-4">
            <h2 className="subTitle">Tags</h2>
            <section className="flex flex-wrap gap-5">
              {blogbtn.map((item) => (
                <div key={item.id} className="blogbtn">
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </section>
          </section>
          <section className="mb-5">
            <h2 className="subTitle">Subscribe to our newsletter</h2>
            <p>Get the latest blog updates straight to your inbox.</p>
          </section>
          <section>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none mb-3"
            />
            <div className="flex justify-center bg-[var(--secondary-light)] rounded-md py-2 px-4 text-white">
              <Link href="#">
                <h1>Subscribe</h1>
              </Link>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default BlogPost;

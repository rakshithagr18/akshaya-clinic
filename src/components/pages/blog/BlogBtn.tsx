//container
import Container from "@/components/layout/Container";
//link
import Link from "next/link";
import React from "react";
//json
import blogbtn from "@/components/Assets/Data/blogbtn.json";

const BlogBtn = () => {
  return (
    <section className="padding ">
      <section className="bg-[#f5f5f5] py-5">
        <Container width>
          <section className="flex flex-col sm:flex-row   justify-between ">
            <section className="flex flex-col sm:flex-row gap-5 sm:gap-10   ">
              {blogbtn.map((item) => (
                <div key={item.id} className="blogbtn">
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </section>
            <section className="blogbtn ">
              <select name="Text" id="text" className="outline-none">
                <option value=" sort by: newest"> Sort By: Newest</option>
                <option value=" sort by: oldest"> Sort By: Oldestst</option>
              </select>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default BlogBtn;

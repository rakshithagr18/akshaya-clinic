import Container from "@/components/layout/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import BlogDetailsBtn from "./BlogDetailsBtn";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

//interfaces
import { IBlog } from "@/utils/interfaces";

const BlogContent = ({ data }: { data: IBlog | null }) => {
  return (
    <section className="padding">
      <Container width>
        <section>
          {/* Blog Title */}
          <h2 className="mb-3 title">{data?.title}</h2>

          {/* Tags */}
          <section className="flex flex-col sm:flex-row gap-4 mb-3">
            {data?.tags.map((tag, index) => (
              <div key={index} className="blogbtn">
                <Link href="#">{tag}</Link>
              </div>
            ))}
          </section>
          {/* Description */}
          <section>
            <p className="mb-4">{data?.desc}</p>
            {/* Banner Image */}
            {data?.bannerImage && (
              <div>
                <Image
                  src={data?.bannerImage}
                  alt="banner"
                  width={1200}
                  height={450}
                  className="w-full h-full object-cover mb-4"
                />
              </div>
            )}
            {/* Content paragraphs */}
            {data?.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            {/* Subtitle */}
            <h2 className="title mb-3">{data?.subTitle}</h2>
            {/* Additional paragraphs */}
            {data?.paragraphs.map((para, index) => (
              <p key={index} className="mb-4">
                {para}
              </p>
            ))}

            {/* Author Section */}
            {data?.author && (
              <section className="flex flex-col sm:flex-row gap-4 items-center">
                <Image
                  src={data.author.image}
                  alt={data.author.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
                <div>
                  <p>{data.author.description}</p>
                  <h2 className="subTitle">{data.author.name}</h2>
                  <div className="flex gap-3 mt-2">
                    {data.author.social.twitter && (
                      <Link
                        href={data.author.social.twitter}
                        className="text-[var(--secondary)]"
                      >
                        <FaTwitter className="text-2xl" />
                      </Link>
                    )}
                    {data.author.social.linkedin && (
                      <Link
                        href={data.author.social.linkedin}
                        className="text-[var(--secondary)]"
                      >
                        <FaLinkedin className="text-2xl" />
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            )}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default BlogContent;

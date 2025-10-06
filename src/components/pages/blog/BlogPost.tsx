"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import blogbtn from "@/components/Assets/Data/blogbtn.json";
import blog from "@/components/Assets/Data/blog.json";
import React, { useState } from "react";

const BlogPost: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  // Newsletter email address
  const newsletterEmail = "subscribe@yourdomain.com";

  // ✅ Updated to open Gmail compose page instead of Outlook
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address");
      return;
    }

    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to subscribe to your newsletter.\n\nMy email: ${email}`
    );

    // Open Gmail compose page in new tab
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${newsletterEmail}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    setEmail("");
  };

  return (
    <section>
      <Container width>
        <section>
          {/* Search Section */}
          <section className="relative w-full py-5">
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

          {/* Recent Posts */}
          <section>
            <h2 className="subTitle">Recent Posts</h2>
            {blog.map((item) => (
              <div key={item.id} className="mb-4">
                <Link href={`/blog/${item.link}`}>
                  <p className="mb-2">{item.title}</p>
                </Link>
              </div>
            ))}
          </section>

          {/* Tags Section */}
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

          {/* Newsletter Subscription */}
          <section className="mb-5">
            <h2 className="subTitle">Subscribe to our newsletter</h2>
            <p>Get the latest blog updates straight to your inbox.</p>
          </section>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none mb-3"
            />
            <button
              type="submit"
              className="w-full bg-[var(--secondary-light)] rounded-md py-2 px-4 text-white hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </Container>
    </section>
  );
};

export default BlogPost;

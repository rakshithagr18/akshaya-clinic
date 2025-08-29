"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import blog from "@/components/Assets/Data/blog.json";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="padding" id="blog">
      <Container width>
        <section className="flex items-center justify-center">
          <h2 className="title mb-10">Our Blogs</h2>
        </section>
      </Container>

      <section className="relative w-[90%] m-auto">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".button-next-slide-blogs",
            prevEl: ".button-prev-slide-blogs",
          }}
          breakpoints={{
            1024: { slidesPerView: 1 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {blog.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl sm:grid grid-cols-[50%_50%] overflow-hidden shadow-md">
                {/* Left - Image without overlay text */}
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={502}
                    height={350}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>

                {/* Right - Content centered on mobile, left on desktop */}
                <div className="p-6 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.para}</p>
                  <Link
                    href={`/blog/${item.link}`}
                    className="text-red-500 font-semibold flex items-center gap-2"
                  >
                    Read more <FaArrowRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full z-10">
          <div className="button-prev-slide-blogs cursor-pointer bg-white shadow-md p-2 rounded-full">
            <FaArrowLeft />
          </div>
          <div className="button-next-slide-blogs cursor-pointer bg-white shadow-md p-2 rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
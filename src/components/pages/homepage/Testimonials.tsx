"use client";
//container
import Container from "@/components/layout/Container";
//image
import Image from "next/image";
import React from "react";
//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
//json
import testimonials from "@/components/Assets/Data/testimonials.json";

const Testimonials = () => {
  return (
    <section className="padding bg-[var(--background)] ">
      <Container width>
        <section className="flex items-center justify-center">
          <h2 className="title mb-10">Testimonials</h2>
        </section>
      </Container>
      <section className="relative w-[90%] m-auto">
        <section className="w-[90%] m-auto">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".button-next-slide-testimonials",
              prevEl: ".button-prev-slide-testimonials",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 3000, // 3 seconds delay between slides
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="mySwiper "
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-2xl sm:flex gap-20">
                  {/* Image */}
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt="testimonials"
                      width={250}
                      height={250}
                      className="object-cover rounded-2xl mb-10 sm:mb-0 w-full max-w-[250px] sm:w-[250px]"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="text-[var(--content)] mb-3">{item.para}</p>
                    <h3 className="text-[var(--secondary)] subTitle font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="flex justify-between items-center absolute bottom-[50%] w-full z-10">
          <div className="button-prev-slide-testimonials text-[20px] font-medium text-[var(--border)]">
            <FaArrowLeft />
          </div>
          <div className="button-next-slide-testimonials text-[20px] font-medium text-[var(--border)]">
            <FaArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
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
import services from "@/components/Assets/Data/services.json";

const Services = () => {
  return (
    <section className="padding " id="services">
      <Container width>
        <section className="flex items-center justify-between">
          <h2 className="title mb-10">Our Services</h2>
        </section>
      </Container>
      <section className="relative w-[95%] m-auto">
        <section className="w-[95%] m-auto">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".button-next-slide-services",
              prevEl: ".button-prev-slide-services",
            }}
            breakpoints={{
              350: { slidesPerView: 1 },
              650: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden rounded-2xl w-[300px] h-[300px] sm:w-full sm:h-[350px] m-auto">
                  {/* Fixed equal image size */}
                  <Image
                    src={item.image}
                    alt="services"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-[var(--white)] subTitle">
                      {item.title}
                    </h3>
                    <p className="text-[var(--white)]">{item.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center absolute bottom-[50%] w-full z-10">
          <div className="button-prev-slide-services text-[20px] font-medium text-[var(--border)] cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className="button-next-slide-services text-[20px] font-medium text-[var(--border)] cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;

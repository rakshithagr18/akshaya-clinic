"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import doctors from "@/components/Assets/Data/doctors.json";
import Link from "next/link";

const Doctors = () => {
  return (
    <section className="padding " id="doctors">
      <Container width>
        <h2 className="title mb-10 text-center sm:text-left">Our Doctors</h2>
      </Container>

      <section className="relative w-full max-w-[full] mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".button-next-slide-doctors",
            prevEl: ".button-prev-slide-doctors",
          }}
          breakpoints={{
            // Mobile: centered with 1 slide
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            // Tablet: show 2 slides, not centered
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            // Desktop: show 3-4 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {doctors.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex flex-col items-center text-center rounded-2xl bg-white shadow-md w-full max-w-[280px] overflow-hidden mx-auto">
                {/* Image */}
                <div className="w-full h-[250px] sm:h-[300px] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center justify-center p-4">
                  <h3 className="text-[var(--primary)] subTitle mb-2">{item.title}</h3>
                  <p className="text-[var(--content)] text-sm mb-3">{item.para}</p>
                  <Link href="" className="btnLink">
                    Book An Appointment
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - Only show on desktop */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <div className="button-prev-slide-doctors text-2xl font-medium text-[var(--border)] cursor-pointer bg-white p-2 rounded-full shadow-md">
            <FaArrowLeft />
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <div className="button-next-slide-doctors text-2xl font-medium text-[var(--border)] cursor-pointer bg-white p-2 rounded-full shadow-md">
            <FaArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Doctors;
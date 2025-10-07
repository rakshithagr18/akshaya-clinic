"use client";
import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import doctors from "@/components/Assets/Data/doctors.json";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const Doctors = () => {
  return (
    <section className="padding" id="doctors">
      <Container width>
        <h2 className="title mb-10 text-center sm:text-left">Our Doctors</h2>
      </Container>

      <section className="relative w-full mx-auto px-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={0} // ✅ No gaps between cards
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".button-next-slide-doctors",
            prevEl: ".button-prev-slide-doctors",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"
        >
          {doctors.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex flex-col justify-between items-center text-center rounded-2xl bg-white shadow-md w-full max-w-[300px] h-[420px] overflow-hidden mx-auto transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

                {/* ✅ Equal Image Section */}
                <div className="w-full h-[250px] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                {/* ✅ Equal Content Section */}
                <div className="flex flex-col items-center justify-between p-4 h-[170px]">
                  <div>
                    <h3 className="text-[var(--primary)] subTitle mb-1">{item.title}</h3>
                    <p className="text-[var(--content)] text-sm line-clamp-2 mb-2">
                      {item.para}
                    </p>
                  </div>
                  <Link href="tel:8747819118" className="btnLink">
                    Book An Appointment
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Navigation Arrows on Slider Sides */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
          <div className="button-prev-slide-doctors text-2xl text-gray-700 bg-white/90 p-3 rounded-full cursor-pointer shadow-md hover:bg-gray-200 transition">
            <FaArrowLeft />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
          <div className="button-next-slide-doctors text-2xl text-gray-700 bg-white/90 p-3 rounded-full cursor-pointer shadow-md hover:bg-gray-200 transition">
            <FaArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Doctors;

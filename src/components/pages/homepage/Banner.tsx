// Banner.js
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden sm:block w-full h-[450px] relative">
        <Image
          src="/assets/new/bannerimage.png"
          alt="banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="block sm:hidden w-full h-[400px] relative">
        <Image
          src="/assets/new/bannerimage.png"
          alt="Mobile Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-5">
        <Container width>
          <div>
            {/* Uncomment below lines if you want title & text */}
            {/* <h1 className="sm:text-5xl text-3xl font-bold text-white mb-3">
              Compassionate OB/GYN Care
            </h1>
            <p className="text-lg sm:text-2xl text-white mb-5">
              Every Step of the Way
            </p> */}
            {/* <Link
              href="#"
              className="px-6 py-3 bg-white text-[var(--primary)] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Meet Our Doctors
            </Link> */}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;


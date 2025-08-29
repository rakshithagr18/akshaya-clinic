import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

const specialtiesData = [
  {
    title: "Menopause & Hormonal Health",
    img: "/assests/new/menopause & harmonal health.png",
  },
  {
    title: "Neonatology1",
    img: "/assests/new/neonatology1.png",
  },
  {
    title: "Ultrasound & Diagnostics",
    img: "/assests/new/ultrasound & Diagonstics.png",
  },
  {
    title: "Dentistry",
    img: "/assests/new/doctorimage2.png",
  },
  {
    title: "Head and Neck Surgery",
    img: "/assests/new/head&necksurgeryimage.png",
  },
  {
    title: "Orthopaedic",
    img: "/assests/new/orthopaedic.png",
  },
];

const Specialties = () => {
  return (
    <section className="padding">
      <Container width>
        <section>
          <h2 className="title mb-10">Specialties</h2>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {specialtiesData.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl"
              >
                {/* Fixed uniform image size */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 md:group-hover:scale-105"
                />

                {/* Overlay effect */}
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                >
                  <h2 className="subTitle text-white text-center px-4">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Specialties;

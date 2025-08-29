"use client"; // make it client-side

import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

// Awards data
const awardsData = [
  {
    id: 1,
    name: "Dr. Victoria Malchar",
    desc: "Recognized for her contributions to the field of medicine.",
    image: "/assets/new/awards1.png",
  },
  {
    id: 2,
    name: "Dr. Edward Stokes",
    desc: "Notable for his impactful work in healthcare.",
    image: "/assets/new/awards2.png",
  },
  {
    id: 3,
    name: "Dr. AKIL MASOOD",
    desc: "Acknowledged for his dedication and achievements in medicine.",
    image: "/assets/new/awards3.png",
  },
];

// fallback if image not found
const getImagePath = (path: string) => {
  // Just return placeholder if path is empty/null
  return path && path.trim() !== "" ? path : "/assets/placeholder.png";
};

const Awards = () => {
  return (
    <section className="py-12">
      <Container width>
        <h2 className="title mb-8 text-center">Awards / Certifications</h2>

        <section className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center justify-between w-full sm:w-1/3 h-[380px] text-center p-4 rounded-2xl shadow-lg bg-white"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={getImagePath(award.image)}
                  alt={award.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <h2 className="subTitle text-base font-semibold">
                  {award.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{award.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Awards;

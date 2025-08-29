import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

// Updated blog data
const blogData = [
  {
    id: 1,
    title: "Understanding Menopause & Hormonal Health",
    category: ["HealthTips", "Wellness"],
    description:
      "Learn about menopause symptoms, hormonal changes, and how to manage your health effectively during this stage of life.",
    image: "/assests/new/menopause & harmonal health.png",
    link: "/blog/menopause-hormonal-health",
  },
  {
    id: 2,
    title: "Neonatology: Care for Newborns",
    category: ["HealthTips", "Newborn Care"],
    description:
      "Explore the essentials of neonatal care and how proper medical attention ensures healthy development in newborns.",
    image: "/assests/new/neonatology.png",
    link: "/blog/neonatology-care-newborns",
  },
  {
    id: 3,
    title: "Advances in Ultrasound & Diagnostics",
    category: ["Diagnostics", "Medical Technology"],
    description:
      "Discover how modern ultrasound techniques help in early diagnosis and accurate treatment planning for patients.",
    image: "/assests/new/ultrasound & Diagonstics.png",
    link: "/blog/ultrasound-diagnostics",
  },
  {
    id: 4,
    title: "Maintaining Oral Health with Dentistry",
    category: ["HealthTips", "Dentistry"],
    description:
      "Tips and practices to keep your teeth and gums healthy, along with the latest advancements in dental care.",
    image: "/assests/new/dentalpatient.png",
    link: "/blog/dentistry-oral-health",
  },
  {
    id: 5,
    title: "Head and Neck Surgery Insights",
    category: ["Surgery", "HealthTips"],
    description:
      "An overview of head and neck surgical procedures, recovery tips, and innovations in surgical techniques.",
    image: "/assests/new/doctorimage3.png",
    link: "/blog/head-neck-surgery",
  },
  {
    id: 6,
    title: "Orthopaedic Care for Strong Bones",
    category: ["Orthopaedics", "HealthTips"],
    description:
      "Learn about orthopaedic care, treatments for bone injuries, and preventive tips for maintaining strong bones.",
    image: "/assests/new/orthopedicpatient.png",
    link: "/blog/orthopaedic-care",
  },
];

const BlogCards = () => {
  return (
    <section className="py-8 bg-[var(--background)]">
      <Container width>
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="rounded shadow-lg overflow-hidden bg-white">
                {/* Fixed smaller height container for equal images */}
                <div className="relative w-full h-36">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="px-4 pb-4">
                  <div className="flex gap-2 mb-2 flex-wrap">
                    {blog.category.map((cat, index) => (
                      <div key={index} className="blogcardbtn text-xs">
                        <Link href="#">{cat}</Link>
                      </div>
                    ))}
                  </div>
                  <h2 className="font-semibold mb-2 text-sm">{blog.title}</h2>
                  <p className="text-xs mb-2">{blog.description}</p>
                  {/* <Link
                    href={blog.link}
                    className="flex items-center gap-2 text-[var(--secondary-light)] text-sm"
                  >
                    Read More <FaLongArrowAltRight />
                  </Link> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default BlogCards;

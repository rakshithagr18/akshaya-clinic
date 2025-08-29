import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

const About = () => {
  return (
    <section className="padding ">
      <Container width>
        <section className="" id="about">
          <h2 className="title mb-10">
            About <span>Us</span>
          </h2>

          <section className="grid grid-col-1 sm:grid-cols-2 items-center ">
            <div>
              <Image
                src="/assets/new/image1.png"
                alt="aboutus"
                width={550}
                height={550}
                className="mb-5 sm:mb-0 rounded-2xl"
              />
            </div>

            <div>
              <h3 className="subTitle">Welcome to Akshaya Clinic</h3>

              <p className="">
                {" "} At Akshaya Clinic, we believe that good health is the foundation of a happy life. Established with the vision of providing affordable, accessible, and reliable healthcare, our clinic has been serving the community with compassion and dedication.{" "}
              </p>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default About;

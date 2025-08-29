import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Appoinment = () => {
  return (
    <section className="padding ">
      <Container width>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
          <div className="">
            <h3 className="subTitle">Let’s Take Care of You</h3>

            <p className="mb-5 font-bold">
              Click the button below to book your appointment through our secure
              online booking system. It’s fast, easy, and just takes a minute.
            </p>
            <div>
              <Link href="tel:8913412897" className="btnLink">
                Book an appointment
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/assests/new/doctorimage.png"
              alt="Doctor"
              width={600}
              height={400}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Appoinment;


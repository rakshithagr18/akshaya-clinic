//container
import Container from "@/components/layout/Container";
//link
import Link from "next/link";
import React from "react";
//icons
import { FaPhoneAlt, FaAmbulance, FaMapMarkerAlt } from "react-icons/fa";

const Emergency = () => {
  return (
    <section className="padding">
      <Container width>
        <section className="sm:flex justify-between bg-[var(--primary)] py-10 px-5 rounded-2xl">
          
          {/* 24x7 Hotline */}
          <div className="flex flex-col items-center mb-5 sm:mb-0 text-center">
            <div className="text-[var(--white)] text-6xl mb-3 transition-transform duration-300 hover:scale-110 hover:text-yellow-400">
              <FaPhoneAlt />
            </div>
            <h3 className="subTitle text-[var(--white)]">24x7 Hotline</h3>
            <p className="mb-5 text-[var(--white)]">
              Call us on our 24x7 hotline for any queries.
            </p>
            <div className="border border-[var(--white)] px-5 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[var(--primary)]">
              <Link href="tel:9732456890">
                Call us now
              </Link>
            </div>
          </div>

          {/* Book Ambulance */}
          <div className="flex flex-col items-center mb-5 sm:mb-0 text-center">
            <div className="text-[var(--white)] text-6xl mb-3 transition-transform duration-300 hover:scale-110 hover:text-yellow-400">
              <FaAmbulance />
            </div>
            <h3 className="subTitle text-[var(--white)]">Book Ambulance</h3>
            <p className="mb-5 text-[var(--white)]">
              Book an ambulance in case of an emergency.
            </p>
            <div className="border border-[var(--white)] px-5 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[var(--primary)]">
              <Link href="tel:8768975465">
                Book Ambulance
              </Link>
            </div>
          </div>

          {/* Locate Us */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[var(--white)] text-6xl mb-3 transition-transform duration-300 hover:scale-110 hover:text-yellow-400">
              <FaMapMarkerAlt />
            </div>
            <h3 className="subTitle text-[var(--white)]">Locate Us</h3>
            <p className="mb-5 text-[var(--white)]">
              Visit one of our locations for a consultation.
            </p>
            <div className="border border-[var(--white)] px-5 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[var(--primary)]">
              <Link
                href="https://www.bing.com/maps/search?mepi=107%7ELocal%7ETopOfPage%7EEntity_Vertical_List_Card&ty=17&segment=Local&sei=0&q=akshaya+clinic&FORM=MPSRPL"
              >
                View Hospitals
              </Link>
            </div>
          </div>

        </section>
      </Container>
    </section>
  );
};

export default Emergency;


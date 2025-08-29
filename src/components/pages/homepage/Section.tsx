import Container from "@/components/layout/Container";
import React from "react";
// Import Font Awesome icons
import { FaCalendarCheck, FaLaptopMedical, FaUserMd, FaHospital } from "react-icons/fa";

const Section = () => {
  return (
    <section className="bg-[var(--primary)] py-6 pb-10">
      <Container width>
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">

          {/* Book Appointment */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <div className="text-white text-6xl mb-3 hover:text-yellow-400 transition-colors duration-300">
              <FaCalendarCheck />
            </div>
            <p className="text-white sm:text-2xl">Book Appointment</p>
          </div>

          {/* Consult Online */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <div className="text-white text-6xl mb-3 hover:text-yellow-400 transition-colors duration-300">
              <FaLaptopMedical />
            </div>
            <p className="text-white sm:text-2xl">Consult Online</p>
          </div>

          {/* Find Doctor */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <div className="text-white text-6xl mb-3 hover:text-yellow-400 transition-colors duration-300">
              <FaUserMd />
            </div>
            <p className="text-white sm:text-2xl">Find Doctor</p>
          </div>

          {/* Locate Hospital */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <div className="text-white text-6xl mb-3 hover:text-yellow-400 transition-colors duration-300">
              <FaHospital />
            </div>
            <p className="text-white sm:text-2xl">Locate Hospital</p>
          </div>

        </section>
      </Container>
    </section>
  );
};

export default Section;

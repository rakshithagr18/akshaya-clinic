"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { BASE_URL } from "@/utils/constants";
import { IDoctor } from "@/utils/interfaces";
import Link from "next/link";

const DoctorListing = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperReady, setSwiperReady] = useState(false);
  const [selectedDept, setSelectedDept] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doctors`);
        const data = await response.json();
        setDoctors(data); // make sure your API returns array of doctors

        console.log(data);

      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
    setSwiperReady(true);
  }, []);

  // Filtering doctors
  const filteredDoctors = doctors.filter((doctor) => {
    if (selectedDept !== "all") {
      return doctor.dept?.toLowerCase().replace(/\s+/g, "") === selectedDept;
    }
    if (searchTerm.trim() !== "") {
      return doctor.dept?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <div className="p-0 relative">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="/assets/new/doctorbanner.png"
          alt="doctorbanner"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent flex flex-col justify-center items-start text-left px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-3">
            Meet our Doctors
          </h1>
          <p className="text-white text-lg md:text-xl max-w-xl">
            Compassionate care. Advanced technology. Expert team.
          </p>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="p-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Doctors</h2>

          {/* Custom Dropdown with Search */}
          <div className="relative w-60">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border border-gray-300 rounded px-4 py-2 text-gray-700 flex items-center justify-between w-full focus:outline-none"
            >
              {selectedDept === "all"
                ? "All Departments"
                : selectedDept.charAt(0).toUpperCase() + selectedDept.slice(1)}
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-20">
                {/* Search inside dropdown */}
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search Speciality"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-full focus:outline-none"
                  />
                </div>

                {/* Options */}
                <ul className="max-h-60 overflow-y-auto">
                  <li
                    onClick={() => {
                      setSelectedDept("all");
                      setSearchTerm("");
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    All Departments
                  </li>

                  {[
                    "Pediatrics",
                    "Gynecology",
                    "Cardiology",
                    "Internal Medicine",
                    "ENT",
                    "Radiology",
                    "General Surgery",
                    "Critical Care",
                  ]
                    .filter((dept) =>
                      dept.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((dept, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedDept(dept.toLowerCase().replace(/\s+/g, ""));
                          setSearchTerm("");
                          setDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {dept}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="text-center text-gray-600 py-10">⏳ Loading doctors...</div>
        ) : filteredDoctors.length > 0 ? (
          <>
            {/* Custom Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
              <button
                ref={prevRef}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <FaArrowLeft className="text-gray-800" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
              <button
                ref={nextRef}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <FaArrowRight className="text-gray-800" />
              </button>
            </div>

            {/* Doctor Cards Slider */}
            {swiperReady && (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {filteredDoctors.map((doctor, index) => (
                  <SwiperSlide key={index}>
                    <div className="border p-4 shadow-lg rounded-lg flex flex-col h-full min-h-[500px]">
                      {/* Image container */}
                      <div className="w-full h-64 md:h-48 lg:h-52 overflow-hidden rounded bg-gray-100 flex items-center justify-center mb-3">
                        <img
                          src={doctor.image}
                          alt={doctor.firstName}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <h3 className="font-bold mb-2">{doctor.firstName + " " + doctor.lastName}</h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {doctor.desc}
                      </p>
                      <Link
                        href={`/doctors/${doctor._id}`}
                        className="w-full block text-center bg-red-800 text-white px-4 py-2 mt-auto rounded hover:bg-red-900"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </>
        ) : (
          <div className="text-center text-gray-600 py-10">
            🚫 No doctors found in this department.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListing;

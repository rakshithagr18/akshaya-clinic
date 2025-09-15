"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { FaArrowRight } from "react-icons/fa";

const DoctorDetails = () => {
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [openService, setOpenService] = useState(false);

    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [selectedTime, setSelectedTime] = useState("Select Time");
    const [selectedService, setSelectedService] = useState("Select Service");

    const [searchDate, setSearchDate] = useState("");
    const [searchTime, setSearchTime] = useState("");
    const [searchService, setSearchService] = useState("");

    const dates = ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5"];
    const times = [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
    ];
    const services = [
        "Type Of Service",
        "Type Of Service",
        "Type Of Service",
        "Type Of Service",
    ];

    const filteredDates = dates.filter((d) =>
        d.toLowerCase().includes(searchDate.toLowerCase())
    );
    const filteredTimes = times.filter((t) =>
        t.toLowerCase().includes(searchTime.toLowerCase())
    );
    const filteredServices = services.filter((s) =>
        s.toLowerCase().includes(searchService.toLowerCase())
    );

    return (
        <section className="py-8 md:py-10">
            <Container width>
                {/* Grid: left 70% (profile + bio), right 30% (appointment) */}
                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 md:gap-8">
                    {/* LEFT */}
                    <div>
                        {/* Image + Info */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                            {/* Image */}
                            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                                <Image
                                    src="/assets/new/doctorimage5.png"
                                    alt="Dr. Sabrina Khan"
                                    width={400}
                                    height={400}
                                    className="object-cover rounded-2xl shadow-md w-52 h-52 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px]"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 text-left mt-4 md:mt-0">
                                <h1 className="text-blue-400 text-xl sm:text-2xl font-bold mb-4">
                                    Dr. Sabrina Khan
                                </h1>

                                <div className="text-gray-700 space-y-2">
                                    <p className="text-sm sm:text-base">
                                        MBBS (University of Wyoming).
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        M.D. of Medicine (Netherland Medical College).
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        <span className="font-bold">Senior Prof. (MBBS, M.D)</span>{" "}
                                        Netherland Medical College.
                                    </p>

                                    <p className="text-sm sm:text-base">
                                        <span className="font-semibold">Reg No:</span> A-36589
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        <span className="font-semibold">Call:</span>{" "}
                                        <a href="tel:+17002300035" className="underline">
                                            +1 (700) 230-0035
                                        </a>
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        <span className="font-semibold">Email:</span>{" "}
                                        <a href="mailto:example@gmail.com" className="underline">
                                            example@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BIOGRAPHY */}
                        <div className="w-full mt-6 bg-gray-50 rounded-2xl shadow-md">
                            <h3 className="text-lg sm:text-xl font-bold border-b border-gray-300 p-4 sm:p-6">
                                Biography of Dr. Sabrina Khan
                            </h3>

                            <div className="p-4 sm:p-6 space-y-2">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                                    Educational Background
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>

                            <div className="p-4 sm:p-6 space-y-2">
                                <h5 className="text-base sm:text-lg font-semibold text-gray-900">
                                    Medical Experience & Skills
                                </h5>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        {/* Book Appointment */}
                        <div className="bg-sky-400 rounded-2xl shadow-lg p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4">
                                Make Appointment
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base"
                                />

                                {/* DATE */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-left rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-white flex justify-between items-center text-sm sm:text-base"
                                        onClick={() => setOpenDate(!openDate)}
                                    >
                                        {selectedDate}
                                        <span className="ml-2">&#9660;</span>
                                    </button>

                                    {openDate && (
                                        <ul className="absolute z-20 w-full mt-1 bg-white border border-white rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm sm:text-base">
                                            <li className="px-4 py-2 bg-gray-300">Select Date</li>
                                            <li className="px-2 py-2">
                                                <input
                                                    type="text"
                                                    value={searchDate}
                                                    onChange={(e) => setSearchDate(e.target.value)}
                                                    className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black/20"
                                                />
                                            </li>

                                            {filteredDates.map((d, i) => (
                                                <li
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded"
                                                    onClick={() => {
                                                        setSelectedDate(d);
                                                        setOpenDate(false);
                                                        setSearchDate("");
                                                    }}
                                                >
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* TIME */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-left rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-white flex justify-between items-center text-sm sm:text-base"
                                        onClick={() => setOpenTime(!openTime)}
                                    >
                                        {selectedTime}
                                        <span className="ml-2">&#9660;</span>
                                    </button>

                                    {openTime && (
                                        <ul className="absolute z-20 w-full mt-1 bg-white border border-white rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm sm:text-base">
                                            <li className="px-4 py-2 bg-gray-300">Select Time</li>
                                            <li className="px-2 py-2">
                                                <input
                                                    type="text"
                                                    value={searchTime}
                                                    onChange={(e) => setSearchTime(e.target.value)}
                                                    className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black/20"
                                                />
                                            </li>

                                            {filteredTimes.map((t, i) => (
                                                <li
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded"
                                                    onClick={() => {
                                                        setSelectedTime(t);
                                                        setOpenTime(false);
                                                        setSearchTime("");
                                                    }}
                                                >
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* SERVICE */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-left rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-white flex justify-between items-center text-sm sm:text-base"
                                        onClick={() => setOpenService(!openService)}
                                    >
                                        {selectedService}
                                        <span className="ml-2">&#9660;</span>
                                    </button>

                                    {openService && (
                                        <ul className="absolute z-20 w-full mt-1 bg-white border border-white rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm sm:text-base">
                                            <li className="px-4 py-2 bg-gray-300">Select Service</li>
                                            <li className="px-2 py-2">
                                                <input
                                                    type="text"
                                                    value={searchService}
                                                    onChange={(e) => setSearchService(e.target.value)}
                                                    className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black/20"
                                                />
                                            </li>

                                            {filteredServices.map((s, i) => (
                                                <li
                                                    key={i}
                                                    className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded"
                                                    onClick={() => {
                                                        setSelectedService(s);
                                                        setOpenService(false);
                                                        setSearchService("");
                                                    }}
                                                >
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full py-2 bg-white text-gray-800 font-semibold rounded-full shadow flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white transition text-sm sm:text-base"
                                >
                                    <span>Appointment</span>
                                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition text-white" />
                                </button>
                            </form>
                        </div>

                        {/* Timings */}
                        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-1">
                                <span className="border-b-2 border-sky-400 pb-1">
                                    Opening Time
                                </span>
                            </h3>

                            <ul className="space-y-3 text-gray-700 text-xs sm:text-sm">
                                <li className="flex justify-between">
                                    <span>Friday – Saturday</span>
                                    <span className="font-medium text-gray-500">
                                        7.30 am – 4.00 pm
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday – Monday</span>
                                    <span className="font-medium text-gray-500">
                                        10.30 am – 12.00 pm
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Tuesday</span>
                                    <span className="font-medium text-gray-500">Closed</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Wednesday</span>
                                    <span className="font-medium text-gray-500">
                                        8.30 am – 5.00 pm
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Thursday</span>
                                    <span className="font-medium text-gray-500">
                                        7.30 am – 4.00 pm
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DoctorDetails;

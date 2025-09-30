"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { IDoctor } from "@/utils/interfaces";
import { BASE_URL } from "@/utils/constants";
import { GlobalContext } from "@/utils/context/Provider";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoctorDetails = ({ id }: { id: string }) => {
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [tempDate, setTempDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState("Select Time");

    const [searchTime, setSearchTime] = useState("");

    const [docDetails, setDocDetails] = useState<IDoctor | null>(null);
    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, token } = useContext(GlobalContext);
    const router = useRouter();

    const times = [
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
    ];

    const filteredTimes = times.filter((t) =>
        t.toLowerCase().includes(searchTime.toLowerCase())
    );

    const handleBookAppointment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user?._id || !token) {
            alert("Please login First");
            return router.replace("/login");
        }

        if (!reason) {
            return alert("Please fill reason");
        }

        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    date: selectedDate,
                    time: selectedTime,
                    appointmentFor: reason,
                    doctor: docDetails?._id,
                    user: user?._id,
                }),
            });

            const data = await res.json();

            if (!res.ok) return;

            if (data?._id) {
                alert("Appointment Booked");
                router.push("/appointments");
                return;
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchDoctorDetail = async () => {
        try {
            const response = await fetch(`${BASE_URL}/doctors/${id}`);
            const data = await response.json();
            if (data._id) setDocDetails(data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    useEffect(() => {
        fetchDoctorDetail();
    }, []);

    return (
        <section className="py-8 md:py-10">
            <Container width>
                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 md:gap-8">
                    {/* LEFT */}
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                                {/* IMAGE FIX: cover mode */}
                                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-2xl shadow-md overflow-hidden">
                                    <Image
                                        src={docDetails?.image || "/default-doctor.jpg"}
                                        alt="Doctor"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0 text-left mt-4 md:mt-0">
                                <h1 className="text-blue-400 text-xl sm:text-2xl font-bold mb-4">
                                    {docDetails?.firstName + " " + docDetails?.lastName}
                                </h1>
                                <div className="text-gray-700 space-y-2">
                                    <p className="text-sm sm:text-base">
                                        <span className="font-bold">Designation:</span>{" "}
                                        {docDetails?.designation}
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        <span className="font-bold">Department:</span>{" "}
                                        {docDetails?.dept}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        <div className="bg-sky-400 rounded-2xl shadow-lg p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4">
                                Make Appointment
                            </h3>

                            <form className="space-y-4">
                                {/* DATE */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="w-full px-4 py-3 rounded-lg border border-white bg-white flex items-center justify-between text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white"
                                        onClick={() => setOpenDate(!openDate)}
                                    >
                                        {selectedDate
                                            ? selectedDate.toLocaleDateString()
                                            : "Select Date"}
                                        <FaChevronDown className="ml-2" />
                                    </button>

                                    {openDate && (
                                        <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-md p-2">
                                            <DatePicker
                                                selected={tempDate ?? selectedDate}
                                                onChange={(date) => setTempDate(date)}
                                                minDate={new Date()}
                                                inline
                                                calendarClassName="rounded-lg shadow-md p-2"
                                                renderCustomHeader={({
                                                    date,
                                                    decreaseMonth,
                                                    increaseMonth,
                                                    prevMonthButtonDisabled,
                                                    nextMonthButtonDisabled,
                                                }) => (
                                                    <div className="flex justify-between items-center px-2 py-1">
                                                        <button
                                                            onClick={decreaseMonth}
                                                            disabled={prevMonthButtonDisabled}
                                                            className="px-2 py-1 rounded hover:bg-gray-200"
                                                        >
                                                            &lt;
                                                        </button>
                                                        <span>
                                                            {date.toLocaleString("default", {
                                                                month: "long",
                                                            })}{" "}
                                                            {date.getFullYear()}
                                                        </span>
                                                        <button
                                                            onClick={increaseMonth}
                                                            disabled={nextMonthButtonDisabled}
                                                            className="px-2 py-1 rounded hover:bg-gray-200"
                                                        >
                                                            &gt;
                                                        </button>
                                                    </div>
                                                )}
                                            />
                                            {/* Footer buttons */}
                                            <div className="flex justify-between mt-2 px-2">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setTempDate(null);
                                                        setSelectedDate(null);
                                                    }}
                                                    className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                                                >
                                                    Clear
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        if (tempDate) setSelectedDate(tempDate);
                                                        setOpenDate(false);
                                                    }}
                                                    className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm"
                                                >
                                                    Set
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setTempDate(selectedDate);
                                                        setOpenDate(false);
                                                    }}
                                                    className="px-3 py-1 rounded bg-red-200 hover:bg-red-300 text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
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
                                        <FaChevronDown className="ml-2" />
                                    </button>

                                    {openTime && (
                                        <ul className="absolute z-20 w-full mt-1 bg-white border border-white rounded-lg shadow-lg max-h-40 overflow-y-auto text-sm sm:text-base">
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

                                {/* Reason */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Reason For Appointment"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border-white bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base"
                                    />
                                </div>

                                <button
                                    disabled={loading}
                                    onClick={handleBookAppointment}
                                    className="group w-full py-2 bg-white text-gray-800 font-semibold rounded-full shadow flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white transition text-sm sm:text-base"
                                >
                                    {loading ? <span>Please wait</span> : <span>Schedule now</span>}
                                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DoctorDetails;

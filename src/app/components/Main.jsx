"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faPhone, faEye, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";

const appointments = [
    {
        id: "#Apt0001",
        name: "Adrian",
        date: "11 Nov 2025",
        time: "10.45 AM",
        type: "General Visit",
        mode: "Video Call",
        email: "adrian@example.com",
        phone: "+1 504 368 6874",
        image: "/images/profile-01-DT2Z6e8O.jpg",
    },
    {
        id: "#Apt0002",
        name: "Kelly",
        date: "05 Nov 2025",
        time: "11.50 AM",
        type: "General Visit",
        mode: "Audio Call",
        email: "kelly@example.com",
        phone: "+1 832 891 8403",
        image: "/images/profile-02-CfwraHe7.jpg",
    },
    {
        id: "#Apt0003",
        name: "Samuel",
        date: "27 Oct 2025",
        time: "09.30 AM",
        type: "General Visit",
        mode: "Video Call",
        email: "samuel@example.com",
        phone: "+1 749 104 6291",
        image: "/images/profile-03-ComJhJvI.jpg",
    },
    {
        id: "#Apt0004",
        name: "Catherine",
        date: "18 Oct 2025",
        time: "12.20 PM",
        type: "General Visit",
        mode: "Direct Visit",
        email: "catherine@example.com",
        phone: "+1 584 920 7183",
        image: "/images/profile-04-CEtoD4p6.jpg",
    },
    {
        id: "#Apt0005",
        name: "Robert",
        date: "10 Oct 2025",
        time: "11.30 AM",
        type: "General Visit",
        mode: "Chat",
        email: "robert@example.com",
        phone: "+1 059 327 6729",
        image: "/images/profile-05-C4xc7dns.jpg",
    },
    {
        id: "#Apt0006",
        name: "Anderea",
        date: "26 Sep 2025",
        time: "10.20 PM",
        type: "General Visit",
        mode: "Chat",
        email: "anderea@example.com",
        phone: "+1 278 402 7103",
        image: "/images/patient-06-BuCIyGRS.jpg",
    },
    {
        id: "#Apt0007",
        name: "Peter",
        date: "14 Sep 2025",
        time: "08.10 AM",
        type: "General Visit",
        mode: "Chat",
        email: "peter@example.com",
        phone: "+1 638 278 0249",
        image: "/images/profile-07-DADv0GlP.jpg",
    },
    {
        id: "#Apt0008",
        name: "Emily",
        date: "03 Sep 2025",
        time: "06.00 PM",
        type: "General Visit",
        mode: "Video Call",
        email: "emily@example.com",
        phone: "+1 261 039 1873",
        image: "/images/profile-08-DsYMcYam.jpg",
    },
];

export default function AppointmentsPage() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Appointments</h2>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Patient</th>
                            <th className="px-6 py-3">Date & Details</th>
                            <th className="px-6 py-3">Contact</th>
                            <th className="px-6 py-3">Actions</th>
                            <th className="px-6 py-3">Start</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((apt) => (
                            <tr key={apt.id} className="border-b hover:bg-gray-50 transition">
                                {/* Patient */}
                                <td className="px-6 py-4 flex items-start gap-3">
                                    <Image src={apt.image} alt={apt.name} width={20} height={20} className="rounded-lg" />
                                    <div>
                                        <p className="text-xs text-blue-500">{apt.id}</p> {/* ID in blue */}
                                        <p className="font-medium text-gray-800">{apt.name}</p>
                                    </div>
                                </td>

                                {/* Date & Details */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FontAwesomeIcon icon={faClock} className="text-black" />
                                        <span>{apt.date}, {apt.time}</span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-700 mt-1">{apt.type} | {apt.mode}</p> {/* Bold type & mode */}
                                </td>

                                {/* Contact */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                                        <a href={`mailto:${apt.email}`} className="hover:underline text-sm">{apt.email}</a>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                        <FontAwesomeIcon icon={faPhone} className="text-black" />
                                        <a href={`tel:${apt.phone}`} className="hover:underline text-sm">{apt.phone}</a>
                                    </div>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <FontAwesomeIcon icon={faEye} className="text-black cursor-pointer" title="View" />
                                    <FontAwesomeIcon icon={faMessage} className="text-black cursor-pointer" title="Message" />
                                    <FontAwesomeIcon icon={faXmark} className="text-black cursor-pointer" title="Cancel" />
                                </td>

                                {/* Start Now */}
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="text-black underline text-sm cursor-pointer hover:text-blue-600 font-bold"
                                    >
                                        Start Now
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

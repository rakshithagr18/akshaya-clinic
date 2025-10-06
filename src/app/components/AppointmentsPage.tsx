"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faPhone, faEye, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IAppointment } from "@/utils/interfaces";
import { BASE_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";
import moment from "moment";

export default function AppointmentsPage() {
    const [appointmentsList, setAppointmentsList] = useState<IAppointment[]>([])
    const router = useRouter()

    const handleCancel = async (id: string) => {

        const confirm = window.confirm("Are you sure you want to cancel the appointment ?");

        if (!confirm) {
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("login")
        }

        try {
            const res = await fetch(`${BASE_URL}/appointments/cancel/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await res.json();

            if (!res.ok) {
                // setError(data.message || data.error || `❌ Registration failed (${res.status}). Please try again.`);
                return;
            }

            // Registration successful
            console.log("Registration successful:", data);

            if (data.status) {
                alert("Appointment Canceled successfully");
                getAppointmentsList()
                return
            }


        } catch (err) {

        }
    }

    const getAppointmentsList = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("login")
        }

        try {
            const res = await fetch(`${BASE_URL}/appointments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await res.json();

            console.log("data=>", data);


            if (!res.ok) {
                // alert("Something went wrong")
                return;
            }

            // Assuming the API returns a token upon successful login
            if (Array.isArray(data)) {
                setAppointmentsList(data)
            }

            // Redirect to dashboard on successful login
            // router.push("/dashboard");

        } catch (err) {
            console.error("Login error:", err);
        }
    }

    useEffect(() => {
        getAppointmentsList()
    }, [])

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Appointments</h2>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Doctor</th>
                            <th className="px-6 py-3">Date & Time</th>
                            <th className="px-6 py-3">Reason</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Actions</th>
                            {/* <th className="px-6 py-3">Start</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentsList.map((apt) => (
                            <tr key={apt._id} className="border-b hover:bg-gray-50 transition">
                                {/* Patient */}
                                <td className="px-6 py-4 flex items-start gap-3">
                                    <Image src={apt?.doctor?.image} alt={apt?.doctor?.firstName} width={30} height={30} className="rounded-lg object-cover" />
                                    <div>
                                        <p className="text-xs text-blue-500">#{apt._id.substring(0, 5)}</p> {/* ID in blue */}
                                        <p className="font-medium text-gray-800">{apt.doctor.firstName + " " + apt.doctor.lastName}</p>
                                    </div>
                                </td>

                                {/* Date & Details */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FontAwesomeIcon icon={faClock} className="text-black" />
                                        <span>{moment(apt.date).format("DD MMM YYYY")},</span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-700 mt-1">{apt.time}</p> {/* Bold type & mode */}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="text-xs font-semibold text-gray-700 mt-1">{apt.appointmentFor}</p> {/* Bold type & mode */}
                                </td>

                                {/* Contact */}
                                <td className="px-6 py-4">
                                    <div className={`flex items-center gap-2 ${apt.status == "Scheduled" ? "text-green-700" : apt.status == "Canceled" ? "text-red-700" : "text-gray-700"} `}>
                                        {apt.status}
                                    </div>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4 flex items-center gap-3 text-red-500">
                                    {/* <FontAwesomeIcon icon={faEye} className="text-black cursor-pointer" title="View" />
                                    <FontAwesomeIcon icon={faMessage} className="text-black cursor-pointer" title="Message" /> */}
                                    <button onClick={() => handleCancel(apt._id)} disabled={apt.status == "Canceled"} className="cursor-pointer hover:underline"><FontAwesomeIcon icon={faXmark} className="text-red-500 " title="Cancel" /> Cancel</button>

                                </td>

                                {/* Start Now */}
                                {/* <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="text-black underline text-sm cursor-pointer hover:text-blue-600 font-bold"
                                    >
                                        Start Now
                                    </a>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

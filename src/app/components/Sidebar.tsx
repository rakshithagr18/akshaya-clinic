"use client";

import { faClipboard, faHome, faUserCircle, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function Sidebar({ isOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>>; }) {
    return (
        <div
            className={`w-64 p-3 bg-white shadow-xl transition-transform duration-300 fixed lg:relative h-full z-20
                ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            {/* Logo */}
            <div className="nav-logo text-center py-2">
                <Link href="/">
                    <h1 className="cursor-pointer text-2xl font-semibold font-unbounded">
                        Akshaya<span className="text-[#066dca] font-unbounded">Clinic</span>
                    </h1>
                </Link>
            </div>

            <span className="h-[1.5px] bg-[#dfe0e4] w-full block my-2"></span>

            {/* Welcome */}
            <p className="text-neutral-500 font-sora py-3">
                Welcome To Akshaya Clinic,
            </p>

            {/* Main Navigation */}
            <ul className="flex flex-col gap-3 overflow-y-auto">
                <li className="py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
                    <Link href="/Dashboard" className="flex items-center text-md">
                        <FontAwesomeIcon icon={faHome} className="pe-2 text-[#066dca]" />
                        Dashboard
                    </Link>
                </li>

                <li className="py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
                    <Link href="/Profile" className="flex items-center text-md">
                        <FontAwesomeIcon icon={faUserCircle} className="pe-2 text-[#066dca]" />
                        My Profile
                    </Link>
                </li>
                <li className="py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
                    <Link href="/Appointments" className="flex items-center text-md">
                        <FontAwesomeIcon icon={faClipboard} className="pe-2 text-[#066dca]" />
                        Appointments
                    </Link>
                </li>
            </ul>

            <div className="mt-6">
                <p className="py-3 text-neutral-500 font-sora tracking-wide">Admin</p>
                <ul className="flex flex-col gap-3">
                    <li className="py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
                        <Link href="/Settings" className="flex items-center text-md">
                            <FontAwesomeIcon icon={faGear} className="pe-2 text-[#066dca]" />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Logout */}
            <div className="mt-10">
                <ul className="flex flex-col gap-3">
                    <li className="w-full py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
                        <Link href="/logout" className="flex items-center text-md">
                            <FontAwesomeIcon icon={faRightFromBracket} className="pe-2 text-[#066dca]" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

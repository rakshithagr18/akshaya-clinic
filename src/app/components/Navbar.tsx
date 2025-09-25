"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>>; }) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <div className="bg-white h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">
            {/* Search Box */}
            <div className="search-box border-[#dfe0e4] relative h-[45px] hidden lg:flex items-center rounded-full w-70 outline-none">
                <input type="text" placeholder="Search..." className="border-none outline-none px-4 py-2 w-full" />
                <FontAwesomeIcon icon={faSearch} className="absolute bg-[#006dca] text-white right-0.5 p-3 rounded-[50%]" />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
                {/* Create New Appointment Link */}
                <Link
                    href="/doctor/appointment"
                    className="border border-[#006dca] hover:bg-[#006dca] hover:text-white px-4 rounded-full py-2 cursor-pointer transition-colors duration-300 flex"
                >
                    Create a New Appointment
                </Link>

                {/* User Menu */}
                <div
                    className="user cursor-pointer rounded-[50%] w-[50px] h-[50px] flex justify-center items-center relative"
                    onClick={toggleUserMenu}
                >
                    <Image
                        height={100}
                        width={100}
                        src="/images/user.jpg"
                        alt="user-image"
                        className="rounded-[50%] w-full h-full"
                    />
                    {isUserMenuOpen && (
                        <ul className="absolute top-15 right-0 bg-white w-[200px] p-3 flex flex-col gap-3 rounded-2xl shadow-xl animate-fade-in">
                            <li>
                                <Link href='/Profile' className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href='/Settings' className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faGear} /> Settings
                                </Link>
                            </li>
                            <li>
                                <Link href='/logout' className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

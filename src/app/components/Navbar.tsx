"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>>; }) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isNotificationOpen, setNotificationOpen] = useState(false);

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setNotificationOpen(false);
    };

    const toggleNotificationMenu = () => {
        setNotificationOpen(!isNotificationOpen);
        setIsUserMenuOpen(false);
    };

    return (
        <>
            <div className="bg-white h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">
                <div className="search-box border-[#dfe0e4] relative h-[45px] hidden lg:flex items-center rounded-full w-70 outline-none">
                    <input type="text" placeholder="Search..." className="border-none outline-none px-4 py-2 w-full" />
                    <FontAwesomeIcon icon={faSearch} className="absolute bg-[#006dca] text-white right-0.5 p-3 rounded-[50%]" />
                </div>

                <div className="flex items-center gap-3">
                    <span className="border border-[#006dca] hover:bg-[#006dca] hover:text-white px-4 rounded-full py-2 cursor-pointer transition-colors duration-300 hidden lg:flex">
                        Create a New Apppointment
                    </span>
                    {/* <div
                        className="notification cursor-pointer border border-[#c1c4cc] rounded-full min-w-[45px] min-h-[45px] hidden lg:flex items-center justify-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300"
                        onClick={toggleNotificationMenu}
                    > */}
                    {/* <FontAwesomeIcon icon={faBell} />
                        <span className="badge text-xs text-white bg-[#006dca] px-1 rounded-2xl absolute top-0 right-0">
                            2
                        </span>
                        {isNotificationOpen && ( */}
                    {/* // <ul className="absolute top-14 right-0 bg-white w-[350px] p-3 flex flex-col gap-2 rounded-2xl shadow-xl animate-fade-in">
                            //     <li className="text-sm text-gray-700">
                            //         <Link href='/' className="w-full flex justify-between items-start">
                            //             <div className="flex items-start gap-2">
                            //                 <Image src={user} alt="user-image" className="w-14 h-14" />
                            //                 <div>
                            //                     <span className="text-[#212529] sora-font text-lg">Ronald Richards</span>
                            //                     <p className="text-[#4f586d] text-xs">
                            //                         You can stitch between artboards
                            //                     </p>
                            //                 </div>
                            //             </div>
                            //             <span className="text-xs text-[#4f586d] font-medium">23 Mins ago</span>
                            //         </Link>
                            //     </li>

                            //     <li className="text-sm text-gray-700">
                            //         <Link href='/' className="w-full flex justify-between items-start">
                            //             <div className="flex items-start gap-2">
                            //                 <Image src={user} alt="user-image" className="w-14 h-14" />
                            //                 <div>
                            //                     <span className="text-[#212529] sora-font text-lg">Ronald Richards</span>
                            //                     <p className="text-[#4f586d] text-xs">
                            //                         You can stitch between artboards
                            //                     </p>
                            //                 </div>
                            //             </div>
                            //             <span className="text-xs text-[#4f586d] font-medium">23 Mins ago</span>
                            //         </Link>
                            //     </li>
                            // </ul> */}

                    {/* </div>

                    <div className="comment cursor-pointer border border-[#c1c4cc] rounded-[50%] min-w-[45px] min-h-[45px] hidden lg:flex items-center justify-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div> */}

                    <div className="user cursor-pointer rounded-[50%] w-[50px] h-[50px] flex justify-center items-center relative" onClick={toggleUserMenu}>
                        <Image height={100} width={100} src="/images/user.jpg" alt="user-image" className="rounded-[50%] w-full h-full" />
                        {isUserMenuOpen && (
                            <ul className="absolute top-15 right-0 bg-white w-[200px] p-3 flex flex-col gap-3 rounded-2xl shadow-xl animate-fade-in">
                                <li>
                                    <Link href='/Profile' className="text-md hover:text-[#006dca] transition-colors duration-300">
                                        {/* You need to import faUserCircle if you use it */}
                                        {/* <FontAwesomeIcon icon={faUserCircle} className="pe-2" /> */}
                                        My Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link href='/Settings' className="text-md hover:text-[#006dca] transition-colors duration-300">
                                        <i className="ri-settings-5-line pe-2 text-[18px]"></i>
                                        Settings
                                    </Link>
                                </li>

                                <li >
                                    <Link href='/logout' className="text-md hover:text-[#006dca] transition-colors duration-300">
                                        <i className="ri-shut-down-line pe-2 text-[18px]"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
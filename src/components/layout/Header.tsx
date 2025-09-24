"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useParams } from "next/navigation";

import navbar from "@/components/Assets/Data/navbar.json";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const params = useParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close sidebar and dropdown on route change
  useEffect(() => {
    setSidebar(false);
    setDropdown(false);
  }, [params]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--white)] shadow-md">
      <nav className="w-[95%] mx-auto py-0.5">
        <section className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/home/logo.jpg"
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex gap-4">
              {navbar.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:text-[var(--primary)] transition-colors text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Login Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="bg-red-400 text-black px-4 py-1 rounded hover:bg-red-500 transition text-sm"
              >
                Login
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <Link
                    href="/doctor-login"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Doctor Login
                  </Link>
                  <Link
                    href="/doctor-signup"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Doctor Signup
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden text-[var(--primary)]">
            <button className="text-2xl" onClick={() => setSidebar(true)}>
              <IoMdMenu />
            </button>
          </div>
        </section>

        {/* Sidebar for mobile */}
        {sidebar && <Sidebar setSidebar={setSidebar} />}
      </nav>
    </header>
  );
};

export default Header;

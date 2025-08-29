"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useParams } from "next/navigation";

import navbar from "@/components/Assets/Data/navbar.json";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const params = useParams();

  useEffect(() => {
    setSidebar(false); // Close sidebar on route change
  }, [params]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--white)] shadow-md">
      <nav className="w-[95%] mx-auto py-0.5"> {/* Reduced padding further */}
        <section className="flex items-center justify-between">
          {/* Smaller Logo */}
          <Image
            src="/assets/home/logo.jpg"
            alt="logo"
            width={120}  // Reduced width
            height={120} // Reduced height
            className="object-contain"
          />

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
            <Link href="tel:912345678" className="btnLink text-sm">
              Book Appointment
            </Link>
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


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const SideNavWidgets = () => {
  return (
    <section>
      <section
        id="mysidenav"
        className="fixed  right-0 bottom-0 transform -translate-y-1/2 -translate-x-3 z-50 popup-animation"
      >
        <div
          id="sidenavphone"
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-3  shadow-lg flex items-center gap-2 rounded-full "
        >
          <Link href="https://api.whatsapp.com/send/?phone=+91 8801931034992&text=Hi,%20can%20I%20get%20more%20info%20on%20this?" target="_blank" rel="noopener noreferrer" className="">
            <FaWhatsapp className="text-4xl" />
          </Link>
        </div>
      </section>

      <section
        id="mysidenav"
        className="fixed  right-0 top-1/2 transform -translate-y-1/2  z-50"
      >
        <section
          id="sidenavphone"
          className="bg-[var(--primary)] text-white px-3 py-3  shadow-lg flex items-center gap-2 rounded-tl-lg rounded-bl-lg"
        >
          <Link href="tel: 8801931034992" target="_blank" rel="noopener noreferrer" className="">
            <IoMdCall className="text-4xl" />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default SideNavWidgets;

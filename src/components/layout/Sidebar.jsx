"use client";

import React, { useState } from "react";
//json
import navbar from "@/components/Assets/Data/navbar.json";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Sidebar = ({ setSidebar }) => {
  const [activeLink, setActiveLink] = useState("null")
  return (
    <section className=" fixed top-0 left-0 w-[100%] h-[100%] z-10000 bg-[#04091e] bg-opacity[/100 border">
      <section className=" w-[100%] h-[100%] mt-0 mr-0 mb-0 ml-auto bg-[var(--light-bg)] ">
        <nav className="  h-full ">
          <section className=" h-1/7 text-4xl text-[var(--primary)] flex justify-end border-b-1  border-b-[var(--title-color)] items-center px-5">
            <IoMdClose onClick={() => setSidebar(false)} />
          </section>
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => {
                setActiveLink(item.link)
                setSidebar(false)
              }}
              className= {`py-10 border-b border-[var(--primary)] text-lg  flex justify-center  items-center  hover:text-[--white]  text-[var(--white)]  ${
                activeLink === item.link ? "" : ""
              } `}
            >
              {item.title}
            </Link>
          ))}
         
        </nav>
      </section>
    </section>
  );
};

export default Sidebar;

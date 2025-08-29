import React from "react";
//container
import Container from "./Container";
//image
import Image from "next/image";
//link
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="py-8 bg-[var(--white)]" id="contact">
      <Container width>
        <section className="sm:flex justify-between items-start gap-6">
          {/* Logo Section */}
          <div className="mb-5 sm:mb-0">
            <Image
              src="/assets/home/logo.jpg"
              alt="logo"
              width={250}
              height={250}
              className="object-cover"
            />
          </div>

          {/* Quick Links */}
          <div className="mb-5 sm:mb-0">
            <h2 className="subTitle">Quick Links</h2>
            <div className="flex flex-col gap-2 text-[var(--content)] font-medium">
              <Link href="/">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#doctors">Doctors</Link>
              <Link href="#blogs">Blogs</Link>
              <Link href="#contact">Contact Us</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-5 sm:mb-0">
            <h2 className="subTitle">Socials</h2>
            <div className="flex flex-col gap-2 text-[var(--content)] font-medium">
              <Link href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</Link>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</Link>
              <Link href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <div className="flex gap-4 text-[var(--secondary)]">
              <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-3xl hover:text-blue-600 transition" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-3xl hover:text-pink-500 transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-800 transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter className="text-3xl hover:text-black transition" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="text-3xl hover:text-red-600 transition" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Footer;

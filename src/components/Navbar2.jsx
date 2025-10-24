"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import the Home icon
import HomeIcon from "../../public/Home.png"; // Update with your actual path

export default function Navbar2() {
  return (
    <nav className="bg-black h-[81px] shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center justify-start">
            <Link href="/" passHref>
              <Image
                src="/inno3.png"
                alt="Logo"
                width="300"
                height="64"
                className="ml-0"
              />
            </Link>
          </div>
          <div className="flex items-center ml-auto">
            <Link href="/" passHref>
              <div className="relative p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                <Image
                  src={HomeIcon}
                  alt="Home"
                  width="30"
                  height="30"
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

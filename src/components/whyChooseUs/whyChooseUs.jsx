import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
  
    <div className="flex items-center justify-center min-h-screen bg-[#000000] p-4">
      <div className="w-full max-w-[1000px] h-auto bg-[#000000] rounded-[30px] shadow-lg p-8 border-2 border-white flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl text-[#00EDFF]">
            Why Choose Us?
          </h1>
          <hr className="border-t-2 border-gray-400 mt-4 mb-5 mx-auto w-[100px] md:w-[200px]" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 ml-0 md:ml-4">
          <Image
            src="/Group 19.png"
            alt="Image 1"
            width={253}
            height={123}
            className="rounded-lg"
          />
          <Image
            src="/Group 17.png"
            alt="Image 2"
            width={253}
            height={123}
            className="rounded-lg"
          />
          <Image
            src="/Group 18.png"
            alt="Image 3"
            width={333}
            height={173}
            className="rounded-lg mt-3"
          />
          <div className="mt-8">

            <Image
              src="/Group 20.png"
              alt="Image 4"
              width={253}
              height={123}
              className="rounded-lg"
            />
          </div>
          <div className="mt-8">
            <Image
              src="/Group 21.png"
              alt="Image 5"
              width={253}
              height={123}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

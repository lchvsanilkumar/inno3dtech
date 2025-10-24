import React from "react";
import Image from "next/image";

export default function ImageGallery() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000000] p-4">
      <div className="w-full max-w-[1000px] bg-[#000000] rounded-[30px] shadow-lg p-8 border-2 border-white flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl text-[#00EDFF]">Image Gallery</h1>
          <hr className="border-t-2 border-gray-600 mt-4 mb-5 mx-auto w-[100px] md:w-[200px]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            "/image-1.webp.png",
            "/image-2.webp.png",
            "/image-3.webp.png",
            "/image 2.png",
            "/image-5.webp.png",
            "/image-6.webp.png",
            "/image-7.webp.png",
            "/image-8.webp.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

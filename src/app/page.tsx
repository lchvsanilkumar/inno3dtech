import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/Accordion/page";
import Testimonials from "@/components/Testinomials/page";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Card from "../components/ui/Card";
import WhyChooseUs from "../components/whyChooseUs/whyChooseUs";
import ImageGallery from "../components/ImageGallery/ImageGallery";

export default function Home() {
  const words = ["faster", "better", "easier"];
  return (
    <><Navbar />
      <div className="relative min-h-screen flex flex-col lg:flex-row bg-[#0C0C0C] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.png)' }}>
        <div className="flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center px-4 sm:px-6 lg:px-8 lg:w-1/2">
          <div className="flex flex-col justify-center max-w-lg lg:pr-8 lg:ml-8">
            <div className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-normal text-white dark:text-white whitespace-nowrap">
              We Design
              <FlipWords words={words} /> <br />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-thin text-white mt-4 whitespace-nowrap">
              Precision 3D Printing Services in <span style={{ color: '#00DDEE' }}>Hyderabad</span>
            </div>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <Image
              src="/3dmodelimage.png"
              alt="3D model"
              width={615}
              height={715}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <Card />
      <Testimonials />
      <ImageGallery />
      <Accordion />
      <Footer />
</>
  );
}

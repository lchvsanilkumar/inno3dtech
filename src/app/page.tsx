import React from "react";
import Link from "next/link";
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
    <>
      <Navbar />
      <section className="relative min-h-screen bg-[#0C0C0C] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-white">
                We Design
                <span className="block mt-1"><FlipWords words={words} /></span>
              </h1>
              <p className="mt-4 text-lg sm:text-2xl md:text-3xl font-poppins font-light text-white/90">
                Precision 3D Printing Services in <span className="text-[#00DDEE]">Hyderabad</span>
              </p>
              <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
                Rapid prototyping to production-grade parts with quality materials and expert guidance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00DDEE] text-black font-semibold px-6 py-3 hover:brightness-110 transition">
                  Get a Quote
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">
                  View Services
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/90">
                {["24h Quotes", "ISO‑grade Precision", "Eco Materials", "PAN‑India Shipping"].map((feature) => (
                  <div key={feature} className="flex items-center justify-center lg:justify-start gap-2">
                    <svg className="w-5 h-5 text-[#00DDEE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/3dmodelimage.png"
                alt="3D model"
                width={615}
                height={715}
                className="rounded-[24px] shadow-2xl shadow-black/40 ring-1 ring-white/10"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section id="services" className="scroll-mt-24">
        <Card />
      </section>
      <Testimonials />
      <ImageGallery />
      <Accordion />
      <Footer />
    </>
  );
}

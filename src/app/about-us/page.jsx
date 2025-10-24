"use client";
import React from "react";
import Navbar2 from "../../components/Navbar2";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <div className="iframe-container">
          <iframe
            width="716"
            height="406"
            src="https://www.youtube.com/embed/V73ffMzCRqg?si=wPHdXtprCrAVoSp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="banner-text">
          <p className="line1">Revolutionizing:</p>
          <p className="line2">The Future of 3D Printing</p>
          <p className="line3">Services</p>
        </div>
        <div className="divider"></div>
        <div className="welcome-text-container">
          <p className="welcome-text">
            Welcome to Inno3DTech, your premier destination for cutting-edge 3D
            printing services. Since 2020, we have been transforming ideas into
            reality with precision and creativity. Serving diverse industries,
            we deliver high-quality, customized solutions tailored to your
            needs. Join us in revolutionizing manufacturing and bringing
            innovative visions to life. Let's create something extraordinary
            together.
          </p>
        
      
          <div className="banner-text">
            <p className="line2">Watch Our 3D Printing Process</p>
          </div>

        </div>
        
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Poppins");

          .bg-black {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: black;
          }

          .iframe-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            padding: 1rem;
            border-radius: 30px;
            margin-bottom: 2rem;
          }

          iframe {
            border-radius: 30px;
            border: none;
          }

          .banner-text {
            width: 100%;
            max-width: 858px;
            font-size: 2rem;
            line-height: 1.2;
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .line1,
          .line2,
          .line3 {
            margin: 0;
          }

          .divider {
            width: 100%;
            max-width: 700px;
            height: 0.5px;
            background-color: #ffffff;
            margin: 0.5rem 0;
          }
          .line2 {
    white-space: nowrap;
  }
          .welcome-text-container {
            width: 90%;
            max-width: 1091px;
            height: auto;
            position: relative;
            font-size: 24px;
            font-weight: 100;
            font-family: "Poppins", sans-serif;
            color: #ffffff;
            text-align: center;
            display: inline-block;
            background-image: url("/Group 295.png");
            background-size: cover;
            background-position: center;
            padding: 2rem;
            border-radius: 30px;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .welcome-text {
            font-size: 28px;
            font-weight: 100;
          }

          @media (min-width: 640px) {
            .banner-text {
              font-size: 3rem;
              max-width: 640px;
            }
            .welcome-text {
              font-size: 24px;
            }
          }

          @media (min-width: 768px) {
            .banner-text {
              font-size: 4rem;
              max-width: 768px;
            }
            .welcome-text {
              font-size: 26px;
            }
          }

          @media (min-width: 1024px) {
            .banner-text {
              font-size: 3.375rem;
              max-width: 858px;
            }
            .welcome-text {
              font-size: 28px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

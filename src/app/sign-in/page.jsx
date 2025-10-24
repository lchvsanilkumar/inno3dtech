"use client";
import React, { useEffect } from "react";
import GoogleButton from "@/components/googlebutton";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dummy");
    }
  }, [status, router]);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #1b1b1b)",
        color: "#e5e5e5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full opacity-20 blur-xl"
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 100%)",
            animation: "pulse 10s infinite",
          }}
        />
        <div
          className="rounded-full opacity-10 blur-2xl"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)",
            animation: "pulse 15s infinite reverse",
          }}
        />
      </div>

      {session ? (
        <>
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded shadow-lg hover:bg-red-700 transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>
          <div className="text-center z-10">
            <div className="flex flex-col items-center">
              <Image
                src="/inno3.png"
                alt="Logo"
                width={250}
                height={250}
                className="mb-4 transform transition-transform duration-500 hover:scale-110"
              />
              <h1 className="text-4xl font-bold mb-8 text-white">
                Welcome to Our 3D Printing Website
              </h1>
            </div>
            <button
              onClick={() => router.push("/dummy")}
              className="px-6 py-3 bg-[#1f1f1f] text-white rounded shadow-lg hover:bg-[#3d3d3d] transition-colors duration-300 transform hover:scale-105"
            >
              Go to Dashboard
            </button>
          </div>
        </>
      ) : (
        <div className="text-center z-10">
          <div className="flex flex-col items-center">
            <Image
              src="/inno3.png"
              alt="Logo"
              width={250}
              height={250}
              className="mb-4 transform transition-transform duration-500 hover:scale-110"
            />
            <h1 className="text-4xl font-bold mb-8 text-white">
              Welcome to Our 3D Printing Website
            </h1>
          </div>
          <GoogleButton />
        </div>
      )}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

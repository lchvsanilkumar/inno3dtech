// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";
import ClientOnlyProviders from "./ClientProviders"; // Import the client-only providers

// Setting up the Google font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inno3DTech",
  description: "3D Design and 3D Printing",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnlyProviders>
          {children}
        </ClientOnlyProviders>
      </body>
    </html>
  );
}

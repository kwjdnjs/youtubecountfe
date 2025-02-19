"use client";

import NavBar from "@/components/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className="bg-gray-100">
        <NavBar />
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

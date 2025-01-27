"use client";

import NavBar from "@/components/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

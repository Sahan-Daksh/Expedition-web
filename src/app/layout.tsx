"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const inter = Inter({ subsets: ["latin"] });

// Create a theme instance
const theme = createTheme({
  // Customize your theme here if needed
  palette: {
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#dc004e', // Example secondary color
    },
  },
});

// export const metadata: Metadata = {
//   title: "Expedition",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}

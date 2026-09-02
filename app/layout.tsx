import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ever Campos | Software Developer",
  description:
    "Portfolio for Ever Campos, a software developer building full-stack web applications.",
  openGraph: {
    title: "Ever Campos | Software Developer",
    description:
      "Full-stack web applications built with Next.js, React, TypeScript, and more.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

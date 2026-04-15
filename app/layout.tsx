import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ever Campos | Software Developer",
  description:
    "Portfolio for Ever Campos, a Software Developer Associate building full-stack review tools, document workflows, and production web applications.",
  openGraph: {
    title: "Ever Campos | Software Developer",
    description:
      "Full-stack review tools, document workflows, and production web applications built with Next.js, React, TypeScript, tRPC, PostgreSQL, and more.",
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

import type { Metadata } from "next";
import "./styles/reset.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "rgb(17, 17, 20)" }}>{children}</body>
    </html>
  );
}

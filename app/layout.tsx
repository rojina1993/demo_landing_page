import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Rojina | Free AI Marketing Consultation",
  description: "Get a customized AI marketing plan for your business in a free one-to-one consultation.",
  openGraph: { title: "Free AI Marketing Consultation | Digital Rojina", description: "Get a clear marketing plan to help you get more customers.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de",
  description: "Página acerca de nosotros",
  keywords: ["about", "about us", "information", "acerca de"],
}

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctos",
  description: "Página de contáctos",
  keywords: ["contáctos", "contact", "get in touch", "contáctanos"],
}

export default function ContactPage(){
  return (
    <>
      <span className="text-7xl">Contáctos</span>
    </>
  );
}
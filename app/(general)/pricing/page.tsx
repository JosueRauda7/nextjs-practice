import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description: "Página de precios",
  keywords: ["pricing", "cost", "plans", "tarifas"],
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
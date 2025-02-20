"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Portfolio />
      <Team />
      <Footer />
    </div>
  );
}

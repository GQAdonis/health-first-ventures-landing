import { Metadata } from "next";
import Header from "./components/header";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Health First Ventures - Healthcare Innovation Investment",
  description: "Health First Ventures is a venture capital firm focused on transforming healthcare through strategic investments in innovative companies.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Portfolio />
      <Footer />
    </div>
  );
}

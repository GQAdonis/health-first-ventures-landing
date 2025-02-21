"use client";

import { motion } from "framer-motion";
import BackgroundVideo from "./background-video";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ heading, subheading, ctaText = "View Our Portfolio", ctaLink }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <BackgroundVideo />
      <div className="relative z-10 text-center text-primary-50 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#B4975A] dark:text-[#B4975A]"
        >
          {heading || "Investing in Healthcare Innovation"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-sans text-primary-100 mb-8 max-w-2xl mx-auto"
        >
          {subheading || "Building the future of healthcare through strategic investments and partnerships"}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (ctaLink) {
              window.location.href = ctaLink;
            } else {
              const element = document.getElementById('portfolio');
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
          className="bg-[#B4975A] hover:bg-[#9A8149] dark:bg-[#B4975A] dark:hover:bg-[#9A8149] text-white font-sans font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200"
        >
          {ctaText}
        </motion.button>
      </div>
    </section>
  );
}

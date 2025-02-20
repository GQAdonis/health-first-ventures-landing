"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003B5C] backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="Health First Ventures Logo" 
                width={40} 
                height={40}
                className="transition-all duration-200" 
              />
            </div>
            <span className="text-2xl font-display font-bold text-[#B4975A] dark:text-[#B4975A]">
              Health First Ventures
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#portfolio"
                className="font-sans text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('portfolio');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Portfolio
              </Link>
              <Link
                href="/#mission"
                className="font-sans text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('mission');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Mission
              </Link>
              <Link
                href="/#team"
                className="font-sans text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('team');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Team
              </Link>
              <ContactDialog />
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "HealthTech Solutions",
    description: "AI-powered diagnostic platform",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    name: "MedConnect",
    description: "Telemedicine infrastructure provider",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    name: "BioInnovate",
    description: "Novel therapeutic development",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    name: "CareFlow",
    description: "Healthcare workflow optimization",
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    name: "DataMed",
    description: "Healthcare data analytics platform",
    image: "https://picsum.photos/800/600?random=5"
  },
  {
    name: "PrecisionRx",
    description: "Personalized medicine solutions",
    image: "https://picsum.photos/800/600?random=6"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-primary-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-[#B4975A] dark:text-[#B4975A] mb-12 text-center">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-display font-bold text-primary-50 mb-2">
                    {company.name}
                  </h3>
                  <p className="font-sans text-primary-100">
                    {company.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

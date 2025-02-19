import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "HealthTech Solutions",
    description: "AI-powered diagnostic platform",
    image: "/images/company1.jpg"
  },
  {
    name: "MedConnect",
    description: "Telemedicine infrastructure provider",
    image: "/images/company2.jpg"
  },
  {
    name: "BioInnovate",
    description: "Novel therapeutic development",
    image: "/images/company3.jpg"
  },
  {
    name: "CareFlow",
    description: "Healthcare workflow optimization",
    image: "/images/company4.jpg"
  },
  {
    name: "DataMed",
    description: "Healthcare data analytics platform",
    image: "/images/company5.jpg"
  },
  {
    name: "PrecisionRx",
    description: "Personalized medicine solutions",
    image: "/images/company6.jpg"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Portfolio</h2>
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
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
                  <p className="text-white/90">{company.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

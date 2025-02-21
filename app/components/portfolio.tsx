"use client";

import { motion } from "framer-motion";

interface Media {
  url: string;
}

interface PortfolioItem {
  name: string;
  description?: string | null;
  image?: Media | null;
}

interface PortfolioProps {
  items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 bg-primary-100 dark:bg-primary-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-[#B4975A] dark:text-[#B4975A] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-primary-700 dark:text-primary-200">
            Investing in the future of healthcare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden"
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-900 dark:text-primary-50 mb-2">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-primary-600 dark:text-primary-300">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

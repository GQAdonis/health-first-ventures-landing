"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-primary-50 dark:bg-primary-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-display font-bold text-[#B4975A] dark:text-[#B4975A] mb-8">
            Our Mission
          </h2>
          <p className="text-xl font-sans text-primary-700 dark:text-primary-200 leading-relaxed">
            At Health First Ventures, we&apos;re committed to transforming healthcare through strategic investments in innovative companies. We partner with entrepreneurs who share our vision of improving patient outcomes, reducing healthcare costs, and enhancing the delivery of care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

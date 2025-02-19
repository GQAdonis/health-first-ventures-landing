import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Health First Ventures, we&apos;re committed to transforming healthcare through strategic investments in innovative companies. We partner with entrepreneurs who share our vision of improving patient outcomes, reducing healthcare costs, and enhancing the delivery of care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

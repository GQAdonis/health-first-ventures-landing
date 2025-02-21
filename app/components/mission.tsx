"use client";

import { motion } from "framer-motion";
import RichText from '../(app)/_components/rich-text';

interface RichTextContent {
  [key: string]: unknown;
  type?: string;
  children?: Array<{
    text?: string;
    [key: string]: unknown;
  }>;
}

interface MissionProps {
  heading?: string;
  content?: RichTextContent[];
}

export default function Mission({ heading, content }: MissionProps) {
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
            {heading || "Our Mission"}
          </h2>
          <div className="text-xl font-sans text-primary-700 dark:text-primary-200 leading-relaxed">
            {content ? (
              <RichText content={content as any} />
            ) : (
              <p>
                At Health First Ventures, we&apos;re committed to transforming healthcare through strategic investments in innovative companies. We partner with entrepreneurs who share our vision of improving patient outcomes, reducing healthcare costs, and enhancing the delivery of care.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

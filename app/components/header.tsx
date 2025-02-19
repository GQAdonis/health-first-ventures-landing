import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Health First Ventures
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#portfolio" className="text-gray-600 hover:text-gray-800">
              Portfolio
            </Link>
            <Link href="/#mission" className="text-gray-600 hover:text-gray-800">
              Mission
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
}

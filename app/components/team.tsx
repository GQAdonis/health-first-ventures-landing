"use client";

import { motion } from "framer-motion";

interface Media {
  url: string;
}

interface TeamMember {
  name: string;
  role?: string | null;
  bio?: string | null;
  image?: Media | null;
}

interface TeamProps {
  members: TeamMember[];
}

export default function Team({ members }: TeamProps) {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-[#B4975A] dark:text-[#B4975A] mb-4">
            Our Team
          </h2>
          <p className="text-xl text-primary-700 dark:text-primary-200">
            Meet the experts behind Health First Ventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden"
            >
              {member.image && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image.url}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-900 dark:text-primary-50 mb-2">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-primary-600 dark:text-primary-300 font-medium mb-4">
                    {member.role}
                  </p>
                )}
                {member.bio && (
                  <p className="text-primary-600 dark:text-primary-300">
                    {member.bio}
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

'use client'

import { motion } from 'framer-motion'
import { useTeam } from '@/hooks/use-team'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Team() {
  const { members } = useTeam()

  return (
    <section id="team" className="py-24 bg-primary-50 dark:bg-primary-900">
      <div className="container px-4 mx-auto">
        <motion.h2 
          className="text-4xl font-display font-bold text-[#B4975A] dark:text-[#B4975A] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="w-full overflow-hidden bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 shadow-lg rounded-lg">
                <AspectRatio ratio={3/4}>
                  <div className="h-full flex flex-col">
                    <div className="h-3/4 relative bg-primary-100 dark:bg-primary-700">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="h-1/4 flex flex-col justify-center items-center p-4 bg-white dark:bg-primary-800">
                      <h3 className="font-display text-lg text-primary-900 dark:text-primary-50 text-center">{member.name}</h3>
                      <p className="font-sans text-primary-600 dark:text-primary-200 text-center">{member.title}</p>
                    </CardContent>
                  </div>
                </AspectRatio>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

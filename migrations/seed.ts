import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'
import type { Page } from '@/payload-types'

export const landingPage = {
  slug: 'landing-page',
  title: 'Health First Ventures',
  richText: [
    {
      type: 'h1',
      children: [
        {
          text: 'Welcome to Health First Ventures',
        },
      ],
    },
  ],
  hero_heading: 'Investing in the Future of Healthcare',
  hero_subheading: 'Transforming healthcare through strategic investments and partnerships',
  hero_ctatext: 'Learn More',
  hero_ctalink: '#mission',
  mission_heading: 'Our Mission',
  mission_content: [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Health First Ventures is dedicated to advancing healthcare innovation through strategic investments in promising technologies and companies. We believe in supporting entrepreneurs who share our vision of improving patient outcomes and transforming healthcare delivery.',
        },
      ],
    },
  ],
  portfolio: [
    {
      name: 'MedTech Innovations',
      description: 'Pioneering medical device company focused on minimally invasive surgical solutions.',
    },
    {
      name: 'HealthAI Solutions',
      description: 'AI-powered diagnostic platform improving accuracy and efficiency in medical imaging.',
    },
    {
      name: 'BioPharm Research',
      description: 'Developing next-generation therapeutics for chronic diseases.',
    },
  ],
  team: [
    {
      name: 'Dr. Sarah Chen',
      role: 'Managing Partner',
      bio: 'Former Chief of Surgery with 15+ years of healthcare investment experience.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Investment Director',
      bio: 'Healthcare consultant turned investor, specializing in digital health.',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Medical Advisor',
      bio: 'Leading researcher in biotechnology with multiple patents.',
    },
  ],
}

export async function up({ payload, db }: MigrateUpArgs): Promise<void> {
  await payload.create({
    collection: 'users',
    data: {
      email: 'demo@payloadcms.com',
      password: 'demo',
    },
  })

  const page = await payload.create({
    collection: 'pages',
    data: {
      slug: landingPage.slug,
      title: landingPage.title,
      richText: landingPage.richText,
      hero_heading: landingPage.hero_heading,
      hero_subheading: landingPage.hero_subheading,
      hero_ctatext: landingPage.hero_ctatext,
      hero_ctalink: landingPage.hero_ctalink,
      mission_heading: landingPage.mission_heading,
      mission_content: landingPage.mission_content,
    } as any,
  });

  // Insert portfolio items
  for (let i = 0; i < landingPage.portfolio.length; i++) {
    const item = landingPage.portfolio[i];
    await db.execute(sql`
      INSERT INTO "pages_portfolio" ("_parent_id", "_order", "name", "description")
      VALUES (${page.id}, ${i}, ${item.name}, ${item.description})
    `);
  }

  // Insert team members
  for (let i = 0; i < landingPage.team.length; i++) {
    const member = landingPage.team[i];
    await db.execute(sql`
      INSERT INTO "pages_team" ("_parent_id", "_order", "name", "role", "bio")
      VALUES (${page.id}, ${i}, ${member.name}, ${member.role}, ${member.bio})
    `);
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: 'demo@payloadcms.com',
      },
    },
  })

  await payload.delete({
    collection: 'pages',
    where: {
      slug: {
        equals: 'landing-page',
      },
    },
  })
}

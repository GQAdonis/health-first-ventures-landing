'use client';

import type { RichTextElement } from '@payloadcms/richtext-slate';
import Header from "@/components/header";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Footer from "@/components/footer";

interface HeroSection {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface MissionSection {
  heading: string;
  content?: {
    [key: string]: unknown;
    type?: string;
    children?: Array<{
      text?: string;
      [key: string]: unknown;
    }>;
  }[];
}

interface Media {
  url: string;
}

interface PortfolioItem {
  name: string;
  description?: string | null;
  image?: Media | null;
}

interface TeamMember {
  name: string;
  role?: string | null;
  bio?: string | null;
  image?: Media | null;
}

interface HomePageProps {
  id: number;
  title: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  hero?: HeroSection | null;
  mission?: MissionSection | null;
  portfolio?: PortfolioItem[] | null;
  team?: TeamMember[] | null;
}

export default function HomePage(props: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        heading={props.hero?.heading}
        subheading={props.hero?.subheading}
        ctaText={props.hero?.ctaText}
        ctaLink={props.hero?.ctaLink}
      />
      <Mission 
        heading={props.mission?.heading}
        content={props.mission?.content}
      />
      <Portfolio items={props.portfolio || []} />
      <Team members={props.team || []} />
      <Footer />
    </div>
  );
}

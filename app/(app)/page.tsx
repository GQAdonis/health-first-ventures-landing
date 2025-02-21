import { notFound } from 'next/navigation';
import { getPayload } from "@/lib/payload";
import HomePage from './home-page';

async function getLandingPageData() {
  try {
    const payload = await getPayload();
    const { docs } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'landing-page'
        }
      },
      depth: 2,
      limit: 1,
    });
    
    const landingPage = docs[0];
    if (!landingPage) return null;

    const processImage = (image: any) => {
      if (!image) return null;
      if (typeof image === 'number') {
        return { url: `/media/${image}` };
      }
      return image.url ? { url: image.url } : null;
    };

    const portfolio = landingPage.portfolio?.map(item => ({
      name: item.name,
      description: item.description || undefined,
      image: processImage(item.image)
    })) || [];

    const team = landingPage.team?.map(member => ({
      name: member.name,
      role: member.role || undefined,
      bio: member.bio || undefined,
      image: processImage(member.image)
    })) || [];

    return {
      id: landingPage.id,
      title: landingPage.title,
      slug: landingPage.slug || undefined,
      updatedAt: landingPage.updatedAt,
      createdAt: landingPage.createdAt,
      hero: landingPage.hero_heading ? {
        heading: landingPage.hero_heading,
        subheading: landingPage.hero_subheading || undefined,
        ctaText: landingPage.hero_ctatext || undefined,
        ctaLink: landingPage.hero_ctalink || undefined,
      } : undefined,
      mission: landingPage.mission_heading ? {
        heading: landingPage.mission_heading,
        content: landingPage.mission_content || undefined,
      } : undefined,
      portfolio,
      team,
    };
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}

export default async function Home() {
  const pageData = await getLandingPageData();

  if (!pageData) {
    return notFound();
  }

  return <HomePage {...pageData} />;
}

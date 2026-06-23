export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string | null;
  full_description: string | null;
  thumbnail_url: string | null;
  gallery: string[];
  demo_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
}
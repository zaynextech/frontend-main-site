export interface Testimonial {
  id: string;

  client_name: string;

  role: string | null;

  company: string | null;

  rating: number;

  review_text: string;

  rating_type:
    | "GOOGLE"
    | "TRUSTPILOT";

  published: boolean;

  created_at: string;
}
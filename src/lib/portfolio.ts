import { supabase } from "@/lib/supabase";

export async function getPortfolioProjects() {
  const { data, error } =
    await supabase
      .from("portfolio_projects")
      .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    throw error;
  }

  return data;
}

export async function getPortfolioProject(
  slug: string
) {
  const { data, error } =
    await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

  if (error) {
    throw error;
  }

  return data;
}
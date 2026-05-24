import axios from "axios";

export default async function getDynamicRoutes() {
  try {
    const { data } = await axios.get(
      "https://api.zaynex.tech/api/portfolio"
    );

    const projects = data.projects || [];

    return projects.map(
      (project: any) =>
        `/portfolio/${project.slug}`
    );
  } catch (error) {
    console.error(
      "Failed to fetch sitemap routes:",
      error
    );

    return [];
  }
}
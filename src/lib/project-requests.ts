export interface CreateProjectRequestInput {
  company_name: string;
  email: string;
  phone?: string;
  project_name: string;
  project_type: string;
  budget_range?: string;
  target_launch_date?: string;
  description: string;
}

export async function createProjectRequest(
  data: CreateProjectRequestInput
) {
  const response =
    await fetch(
      "https://client.zaynex.tech/api/project-request",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          data
        ),
      }
    );

  const result =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "Failed to submit project request"
    );
  }

  return result;
}
export interface CreateMeetingRequestInput {
  client_name: string;
  email: string;
  phone?: string;

  meeting_date: string;
  meeting_time: string;

  reason: string;
}

export async function createMeetingRequest(
  data: CreateMeetingRequestInput
) {
  const API_URL =
    import.meta.env.DEV
      ? "http://localhost:3000"
      : "https://client.zaynex.tech";

  const response =
    await fetch(
      `${API_URL}/api/meetings`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          client_name:
            data.client_name,

          email:
            data.email,

          phone:
            data.phone,

          meeting_type:
            "Consultation",

          meeting_date:
            data.meeting_date,

          meeting_time:
            data.meeting_time,

          notes:
            data.reason,
        }),
      }
    );

  const text =
    await response.text();

  console.log(
    "MEETING API STATUS:",
    response.status
  );

  console.log(
    "MEETING API RESPONSE:",
    text
  );

  let result = {};

  try {
    result = text
      ? JSON.parse(text)
      : {};
  } catch {
    throw new Error(
      `Invalid API response: ${text}`
    );
  }

  if (!response.ok) {
    throw new Error(
      (result as any)?.message ||
        `Request failed (${response.status})`
    );
  }

  return result;
}
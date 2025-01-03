const BASE_URL = process.env.BE_URL || ""; // 기본 URL 설정

async function apiRequest(
  path: string,
  options: RequestInit = {}
): Promise<{ data: any | null; error: string | null }> {
  const url = BASE_URL + path;

  try {
    const response = await fetch(url, options);
    const jsonRes = await response.json();

    if (response.ok) {
      return { data: jsonRes, error: null };
    } else {
      return { data: null, error: jsonRes.msg };
    }
  } catch (error) {
    console.error("Network Error:", error);
    return { data: null, error: "Network error occurred." };
  }
}

export async function get(path: string) {
  return apiRequest(path);
}

export async function post(path: string, objectData: object) {
  return apiRequest(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objectData),
  });
}

export function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

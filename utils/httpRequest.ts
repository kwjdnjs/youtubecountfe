const BASE_URL = process.env.NEXT_PUBLIC_BE_URL || ""; // 기본 URL 설정

async function apiRequest(
  path: string,
  requestInit: RequestInit = {}
): Promise<{ resData: any | null; error: string | null }> {
  const url = BASE_URL + path;

  try {
    const response = await fetch(url, requestInit);
    const jsonRes = await response.json();
    console.log(jsonRes);

    if (response.ok) {
      return { resData: jsonRes, error: null };
    } else {
      return { resData: null, error: jsonRes.msg };
    }
  } catch (error) {
    console.log("Network Error:", error);
    return { resData: null, error: "Network error occurred." };
  }
}

export async function get(path: string) {
  return apiRequest(path);
}

export async function authenticatedGet(
  path: string,
  tokenType: string | null,
  accessToken: string | null
) {
  return apiRequest(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${accessToken}`,
    },
  });
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

export async function authenticatedPost(
  path: string,
  objectData: object,
  tokenType: string | null,
  accessToken: string | null
) {
  return apiRequest(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${accessToken}`,
    },
    body: JSON.stringify(objectData),
  });
}

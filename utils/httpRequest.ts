const BASE_URL = process.env.NEXT_PUBLIC_BE_URL || ""; // 기본 URL 설정

async function apiRequest(path: string, requestInit: RequestInit = {}) {
  const url = BASE_URL + path;

  const response = await fetch(url, requestInit);
  const jsonRes = await response.json();

  if (response.ok) {
    return jsonRes;
  } else {
    throw new Error(jsonRes.msg);
  }
}

function getAccessToken() {
  let tokenType = null;
  let accessToken = null;
  try {
    tokenType = localStorage.getItem("tokenType");
    accessToken = localStorage.getItem("accessToken");
  } catch (e) {
    console.log(e);
    throw new Error("Can't find access token");
  }

  return { tokenType, accessToken };
}

export async function get(path: string) {
  return apiRequest(path);
}

export async function authenticatedGet(path: string) {
  const { tokenType, accessToken } = getAccessToken();

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

export async function authenticatedPost(path: string, objectData: object) {
  const { tokenType, accessToken } = getAccessToken();

  return apiRequest(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${accessToken}`,
    },
    body: JSON.stringify(objectData),
  });
}

export function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

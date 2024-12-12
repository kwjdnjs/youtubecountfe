export async function get(path: string) {
  const url = process.env.BE_URL + path;
  try {
    const response = await fetch(url);
    const jsonRes = await response.json();

    if (response.ok) {
      return { data: jsonRes, error: null };
    } else {
      console.error(jsonRes.msg);
      return { data: null, error: jsonRes.msg };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: null, error: "Failed to fetch data." };
  }
}

export async function post(loc: string, formData: FormData): Promise<any> {
  const url = process.env.BE_URL + loc;

  const response = await fetchFormData(url, "POST", formData);
  return response;
}

async function fetchFormData(url: string, method: string, formData: FormData) {
  const option = createFetchOptionWithFormData(method, formData);

  return fetch(url, option);
}

function createFetchOptionWithFormData(method: string, formData: FormData) {
  return {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: formDataToJson(formData),
  };
}

function formDataToJson(formData: FormData) {
  const json = Object.fromEntries(formData.entries());
  return JSON.stringify(json);
}

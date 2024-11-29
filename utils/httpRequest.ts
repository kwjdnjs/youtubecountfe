export async function get(loc: string) {
  const url = process.env.BE_URL + loc;

  const response = await fetch(url);
  return response;
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

import { get } from "@/utils/httpRequest";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const url = "viewcount/" + id;
  const response = await get(url);

  let jsonData = null;

  if (response.ok) {
    jsonData = await response.json();
  } else {
    throw new Error("Data fetching error");
  }

  return <p>{JSON.stringify(jsonData)}</p>;
}

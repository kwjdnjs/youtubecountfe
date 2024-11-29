import { post } from "@/utils/httpRequest";
import { redirect } from "next/navigation";

export default function VideoSubmitForm() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const response = await post("video", formData);
    const jsonRes = await response.json();

    if (response.ok) {
      console.log(jsonRes);
      redirectViewcountPage(jsonRes["videoId"]);
    } else {
      console.log(jsonRes["msg"]);
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="videoId" />
      <input type="text" name="videoName" />
      <button type="submit">Submit</button>
    </form>
  );
}

function redirectViewcountPage(videoId: string) {
  redirect(`/viewcount/${videoId}`);
}
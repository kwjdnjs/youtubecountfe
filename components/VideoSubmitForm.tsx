import { formDataToObject, post } from "@/utils/httpRequest";
import { redirect } from "next/navigation";
import ModalWrapper from "./ModalWrapper";

export default function VideoSubmitForm() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const obj = formDataToObject(formData);
    const { data, error } = await post("video", obj);

    if (data) {
      redirect(`/viewcount/${data["videoId"]}`);
    } else {
      console.log(error);
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="videoId" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

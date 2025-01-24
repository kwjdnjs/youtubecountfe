"use client";

import { authenticatedPost, formDataToObject } from "@/utils/httpRequest";
import { useRouter } from "next/navigation";
import ModalWrapper from "./modal/ModalWrapper";
import { useState } from "react";

export default function VideoSubmitForm() {
  const router = useRouter();
  const [err, setErr] = useState(null);

  async function handleSubmit(formData: FormData) {
    try {
      const obj = formDataToObject(formData);
      const response = await authenticatedPost("video", obj);

      router.push(`/viewcount/${response["videoId"]}`);
    } catch (e) {
      console.log(e);
      setErr(e.toString());
    }
  }

  return (
    <div>
      <ModalWrapper error={err} />
      <form action={handleSubmit}>
        <input type="text" name="videoId" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

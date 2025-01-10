"use client";

import { authenticatedPost, formDataToObject, post } from "@/utils/httpRequest";
import { redirect } from "next/navigation";
import ModalWrapper from "./ModalWrapper";
import { useState } from "react";

export default function VideoSubmitForm() {
  const [err, setErr] = useState(null);

  async function handleSubmit(formData: FormData) {
    const tokenType = localStorage.getItem("tokenType");
    const accessToken = localStorage.getItem("accessToken");

    const obj = formDataToObject(formData);
    const { resData, error } = await authenticatedPost(
      "video",
      obj,
      tokenType,
      accessToken
    );

    if (resData) {
      redirect(`/viewcount/${resData["videoId"]}`);
    } else {
      setErr(error);
      console.log(error);
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

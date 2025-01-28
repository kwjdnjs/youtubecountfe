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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <ModalWrapper error={err} />
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="videoId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Video ID
            </label>
            <input
              type="text"
              name="videoId"
              id="videoId"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter video ID"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

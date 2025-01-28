"use client";

import { authenticatedGet } from "@/utils/httpRequest";
import { useEffect, useState } from "react";
import ModalWrapper from "../modal/ModalWrapper";
import VideoListItem from "./VideoListItem";

export default function VideoList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await authenticatedGet("videolist");
        setData(response);
      } catch (e) {
        setError(e.toString());
      }
    }

    fetch();
  }, []);

  return (
    <div className="p-6">
      <ModalWrapper error={error} />
      {data && (
        <div className="space-y-4 mt-6 max-w-3xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              <VideoListItem
                videoId={item.videoId}
                videoName={item.videoName}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

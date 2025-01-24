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
    <div>
      <ModalWrapper error={error} />
      {data &&
        data.map((item, index) => (
          <VideoListItem
            key={index}
            videoId={item.videoId}
            videoName={item.videoName}
          />
        ))}
    </div>
  );
}

"use client";

import { authenticatedGet } from "@/utils/httpRequest";
import { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import VideoListItem from "./VideoListItem";

export default function VideoList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      const tokenType = localStorage.getItem("tokenType");
      const accessToken = localStorage.getItem("accessToken");

      const result = await authenticatedGet(
        "videolist",
        tokenType,
        accessToken
      );

      setData(result.resData);
      setError(result.error);
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

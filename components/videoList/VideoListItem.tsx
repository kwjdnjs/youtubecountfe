import Link from "next/link";

export default function VideoListItem({ videoId, videoName }: any) {
  return (
    <div>
      <Link
        href={`/viewcount/${videoId}`}
        className="text-lg font-semibold text-gray-800"
      >
        {videoName}
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function VideoListItem({ videoId, videoName }: any) {
  return (
    <div>
      <Link href={`/viewcount/${videoId}`}>{videoName}</Link>
    </div>
  );
}

import VideoList from "@/components/videoList/VideoList";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <VideoList />
      <br />
      <Link href="/video">등록하러 가기</Link>
    </div>
  );
}

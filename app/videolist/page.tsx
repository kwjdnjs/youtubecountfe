import VideoList from "@/components/videoList/VideoList";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <VideoList />
      <br />
      <Link
        href="/video"
        className="ml-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
      >
        등록하러 가기
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-500">Hello</h1>
      <Link href="videolist">비디오 리스트</Link>
    </div>
  );
}

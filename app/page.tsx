import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-blue-500 text-3xl mb-4">Hello</h1>
      <Link
        href="videolist"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        비디오 리스트
      </Link>
    </div>
  );
}

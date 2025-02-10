import ViewcountChart from "@/components/chart/ViewcountChart";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <ViewcountChart id={id} />
      <div className="flex justify-center mt-6">
        <Link
          href="/videolist"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

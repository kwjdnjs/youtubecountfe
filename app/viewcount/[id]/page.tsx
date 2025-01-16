import ViewcountChart from "@/components/ViewcountChart";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <Link href="/videolist">목록으로 돌아가기</Link>
      <ViewcountChart id={id} />
    </div>
  );
}

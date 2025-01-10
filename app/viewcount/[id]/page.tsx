import { authenticatedGet, get } from "@/utils/httpRequest";
import LineChart from "@/components/LineChart";
import ModalWrapper from "@/components/ModalWrapper";
import ViewcountChart from "@/components/ViewcountChart";
import ViewcountChartWrapper from "@/components/ViewcountChartWrapper";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <ViewcountChart id={id} />
    </div>
  );
}

import { get } from "@/utils/httpRequest";
import LineChart from "@/components/LineChart";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const url = "viewcount/" + id;
  const response = await get(url);
  const jsonRes = await response.json();

  let viewCountList = [];
  let dateTimeList = [];

  if (response.ok) {
    viewCountList = await createDataList(jsonRes, "viewCount");
    dateTimeList = await createDataList(jsonRes, "dateTime");
  } else {
    console.log(jsonRes["msg"]);
  }

  const lineChartData = createLineChartData(viewCountList, dateTimeList);
  const lineChartoptions = getLineChartOptions();

  return (
    <div>
      <LineChart data={lineChartData} options={lineChartoptions} />
    </div>
  );
}

async function createDataList(jsonData: any, attribute: string) {
  const dataList = [];
  for (const i in jsonData) {
    dataList.push(jsonData[i][attribute]);
  }

  return dataList;
}

function createLineChartData(viewCountList: number[], dateTimeList: any[]) {
  return {
    labels: dateTimeList,
    datasets: [
      {
        label: "Dataset 1",
        data: viewCountList,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
}

function getLineChartOptions() {
  return {
    responsive: true,
    scales: {
      x: {
        type: "time", // x축을 시간으로 설정
        time: {
          unit: "hour", // 레이블 단위: 'hour', 'day', 'month', 등
          displayFormats: {
            hour: "MMM dd, HH:mm", // 표시 형식
          },
        },
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
}

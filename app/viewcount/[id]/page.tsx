import { get } from "@/utils/httpRequest";
import LineChart from "@/components/LineChart";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const url = "viewcount/" + id;
  const response = await get(url);

  let jsonRes = null;
  let viewCountList = [];
  let dateTimeList = [];

  if (response.ok) {
    jsonRes = await response.json();
    viewCountList = await createViewCountList(jsonRes);
    dateTimeList = await createDateTimeList(jsonRes);
  } else {
    throw new Error("Data fetching error");
  }

  // 차트 데이터
  const data = createLineChartData(viewCountList, dateTimeList);
  // 차트 옵션
  const options = getLineChartOptions();

  return (
    <div>
      <p>{jsonRes[0]["videoName"]}</p>
      <p>{jsonRes[0]["viewCount"]}</p>
      <p>{jsonRes[0]["dateTime"]}</p>
      <LineChart data={data} options={options} />
    </div>
  );
}

async function createViewCountList(jsonRes) {
  const viewCountData = [];
  for (const d in jsonRes) {
    viewCountData.push(Number(jsonRes[d]["viewCount"]));
  }

  return viewCountData;
}

async function createDateTimeList(jsonRes) {
  const DateTimeData = [];
  for (const d in jsonRes) {
    DateTimeData.push(jsonRes[d]["dateTime"]);
  }

  return DateTimeData;
}

function createLineChartData(viewCountList, dateTimeList) {
  return {
    labels: dateTimeList,
    datasets: [
      {
        label: "Dataset 1",
        data: viewCountList,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // 곡선의 부드러움
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

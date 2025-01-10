"use client";

import { authenticatedGet } from "@/utils/httpRequest";
import ModalWrapper from "./ModalWrapper";
import LineChart from "./LineChart";
import { useEffect, useState } from "react";

export default function ViewcountChart({ id }: any) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const tokenType = localStorage.getItem("tokenType");
      const accessToken = localStorage.getItem("accessToken");

      const result = await authenticatedGet(
        `viewcount/${id}`,
        tokenType,
        accessToken
      );
      setData(result.resData);
      setError(result.error);
    }
    fetchData();
  }, []);

  let lineChartData = null;
  let lineChartOptions = null;

  if (data) {
    const chartData = processChartData(data);
    lineChartData = chartData.lineChartData;
    lineChartOptions = chartData.lineChartOptions;
  }

  return (
    <div>
      {lineChartData && lineChartOptions ? (
        <LineChart data={lineChartData} options={lineChartOptions} />
      ) : (
        <p>Loading chart data...</p>
      )}
      <ModalWrapper error={error} />
    </div>
  );
}

function processChartData(jsonRes) {
  const viewCountList = createDataList(jsonRes, "viewCount");
  const dateTimeList = createDataList(jsonRes, "dateTime");

  const lineChartData = createLineChartData(viewCountList, dateTimeList);
  const lineChartOptions = getLineChartOptions();

  return { lineChartData, lineChartOptions };
}

function createDataList(jsonData: any, attribute: string) {
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

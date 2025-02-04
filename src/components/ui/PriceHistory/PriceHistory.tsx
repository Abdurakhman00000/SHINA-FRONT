import React from "react";
import { Line } from "react-chartjs-2";
import scss from "./PriceHistory.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockData = {
  dates: ["04.01", "05.01", "06.01", "07.01", "08.01", "09.01", "10.01"],
  maxPrices: [22000, 22000, 22000, 22000, 25000, 25000, 25000],
  avgPrices: [11000, 11000, 11100, 11100, 11200, 11200, 11300],
  minPrices: [3000, 3000, 3500, 3500, 4000, 4000, 4500],
};

const PriceHistory = () => {
  const chartData = {
    labels: mockData.dates,
    datasets: [
      {
        label: "Максимальная",
        data: mockData.maxPrices,
        borderColor: "#f39c12",
        backgroundColor: "rgba(243, 156, 18, 0.5)",
      },
      {
        label: "Средняя",
        data: mockData.avgPrices,
        borderColor: "#2980b9",
        backgroundColor: "rgba(41, 128, 185, 0.5)",
      },
      {
        label: "Минимальная",
        data: mockData.minPrices,
        borderColor: "#27ae60",
        backgroundColor: "rgba(39, 174, 96, 0.5)",
      },
    ],
  };

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>История цен</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PriceHistory;

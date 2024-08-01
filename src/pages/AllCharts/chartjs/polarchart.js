import React from "react";
import { PolarArea } from "react-chartjs-2";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const PolarChart = ({ dataColors }) => {
  const polarAreaChartColors = getChartColorsArray(dataColors);

  const data = {
    datasets: [
      {
        data: [11, 16, 7, 18],
        backgroundColor: polarAreaChartColors,
        label: "My dataset", // for legend
        hoverBorderColor: "#fff",
      },
    ],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
  };

  return <PolarArea width={751} height={300} data={data} />;
};

export default PolarChart;
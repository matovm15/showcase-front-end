import React from "react";
import Chart from "react-apexcharts";

const ProfileViews = ({ data }) => {
  const series = [
    {
      name: "Profile Views",
      data: data.views,
    },
  ];
  const options = {
    chart: {
      type: "area",
      height: 100,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    sparkline: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    xaxis: {
      categories: data.months,
    },
    colors: ["#556ee6", "#f1b44c", "#34c38f"],
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  };
  return <Chart options={options} series={series} type="area" />;
};

export default ProfileViews;

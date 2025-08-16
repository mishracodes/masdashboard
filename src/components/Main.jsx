import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import {
  UserIcon,
  CpuChipIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
const Main = () => {
  const cpuChartRef = useRef(null);
  const memChartRef = useRef(null);

  const cpuChartInstance = useRef(null);
  const memChartInstance = useRef(null);

  useEffect(() => {
    // Destroy CPU chart if exists
    if (cpuChartInstance.current) {
      cpuChartInstance.current.destroy();
    }

    // Destroy Memory chart if exists
    if (memChartInstance.current) {
      memChartInstance.current.destroy();
    }

    const ctxc = cpuChartRef.current.getContext("2d");
    const ctxm = memChartRef.current.getContext("2d");

    const labels = [
      "12:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
    ];

    const datasets = [
      {
        label: "trafflon1100",
        data: [20, 12, 56, 97, 31, 45, 60, 20, 99, 78, 40, 15],
        borderColor: "rgba(53, 162, 235, 1)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "trafflon1200",
        data: [24, 15, 12, 66, 90, 18, 53, 72, 20, 49, 99, 61],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "trafflon1300",
        data: [14, 18, 87, 43, 25, 91, 10, 76, 34, 88, 52, 67],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "trafflon1400",
        data: [35, 18, 99, 14, 83, 37, 48, 29, 95, 66, 41, 12],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "trafflon1500",
        data: [18, 24, 61, 27, 39, 58, 85, 46, 23, 78, 55, 99],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ];

    // CPU chart
    cpuChartInstance.current = new Chart(ctxc, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "CPU Utilization" },
        },
      },
    });

    // Memory chart (different random data for example)
    memChartInstance.current = new Chart(ctxm, {
      type: "line",
      data: {
        labels,
        datasets: datasets.map((ds) => ({
          ...ds,
          data: Array.from({ length: labels.length }, () =>
            Math.floor(Math.random() * 101)
          ),
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Memory Utilization" },
        },
      },
    });

    return () => {
      if (cpuChartInstance.current) cpuChartInstance.current.destroy();
      if (memChartInstance.current) memChartInstance.current.destroy();
    };
  }, []);

  const stats = [
    {
      title: "Active Users",
      value: "281",
      subtext: "Just updated",
      icon: <UserIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-gray-800 to-gray-700",
    },
    {
      title: "OSM Memory",
      value: "31",
      subtext: "Just updated",
      icon: <CpuChipIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-400",
    },
    {
      title: "OSP Func. Entries",
      value: "281",
      subtext: "Just updated",
      icon: <ChartPieIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-500 to-green-400",
    },
    {
      title: "OSP Tech. Entries",
      value: "281",
      subtext: "Just updated",
      icon: <ChartPieIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-pink-500 to-pink-400",
    },
  ];

  return (
    <div className="p-4 sm:ml-64 ">
      {/*  <svg className='w-100 h-100' viewBox="0 0 580 386" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M415.031 65.0741L414.937 65.192C414.142 66.2996 413.394 67.4779 412.668 68.6562L385.255 110.745L275.253 51.2408C256.611 39.4813 234.648 32.5293 211.094 32.2229C142.585 31.3274 86.0983 86.755 85.2095 155.78C84.5546 205.434 112.856 248.819 154.28 269.581L22.6882 235.669C21.5187 235.339 20.3492 235.033 19.1563 234.75L18.3377 234.538C13.4258 233.478 8.35017 232.889 3.15761 232.818C2.10505 232.818 1.0525 232.818 -4.76891e-05 232.841L-4.81773e-05 238.427C1.02913 238.403 2.0583 238.379 3.08742 238.403C41.7978 238.922 72.9064 271.066 72.3918 310.091C71.8772 349.117 39.9733 380.436 1.23962 379.918C0.818604 379.918 0.397583 379.918 -6.05448e-05 379.894L-6.10331e-05 385.479C0.397583 385.479 0.795227 385.479 1.16943 385.503C1.47351 385.503 1.80096 385.503 2.15179 385.503C43.4818 385.503 77.3504 351.921 77.8884 310.162C78.2627 281.081 62.3575 255.536 38.7337 242.339L170.185 276.227C182.044 280.209 194.698 282.472 207.866 282.637C254.833 283.249 296.14 257.397 317.776 218.843L386.098 113.974L430.047 137.729C431.38 138.53 432.737 139.26 434.117 139.944L434.351 140.085C440.619 143.055 447.566 144.751 454.934 144.846C472.149 145.081 487.469 136.456 496.638 123.188L496.966 123.424L580 0.50296L577.076 0.50296L503.188 109.873C504.684 105.231 505.503 100.282 505.573 95.1446C505.924 67.3837 483.797 44.5009 456.244 44.1239C439.333 43.9118 424.27 52.207 415.054 65.0741L415.031 65.0741ZM207.983 271.49C145.579 270.665 95.4543 218.843 96.2729 155.945C97.0916 93.5656 147.707 43.3933 209.433 43.3933C209.925 43.3933 210.439 43.3933 210.93 43.3933C273.335 44.2181 323.459 96.04 322.641 158.938C321.822 221.813 270.388 272.315 207.96 271.49L207.983 271.49ZM325.284 202.795C330.546 189.221 333.517 174.492 333.704 159.079C334.219 120.148 316.933 85.0818 289.474 61.7278L383.899 112.796L325.26 202.795L325.284 202.795ZM387.384 111.9L407.289 81.3348C406.213 85.3175 405.628 89.4887 405.558 93.8013C405.371 107.517 410.704 120.03 419.428 129.221L387.361 111.877L387.384 111.9ZM455.542 52.4663C455.729 52.4663 455.916 52.4663 456.104 52.4663C479.096 52.7726 497.551 71.8612 497.246 95.0032C496.942 118.169 477.997 136.739 455.028 136.432C432.035 136.126 413.604 117.037 413.885 93.8956C414.189 70.9186 432.831 52.4427 455.566 52.4427L455.542 52.4663Z" fill="white" fill-opacity="0.2"></path>
</svg>  */}
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] shadow-xl rounded-xl p-5 flex flex-col justify-between"
            >
              <div className="flex items-center">
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl shadow-xl`}
                >
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <span className="ml-1 text-gray-500">{stat.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 h-100">
            <canvas ref={cpuChartRef}></canvas>
          </div>
          <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 h-100">
            <canvas ref={memChartRef}></canvas>
          </div>
        </div>

        <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800 ">
              Murex Services
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of murex services running status on various servers (Ols
                and Bls)
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Service Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Server
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  loginimpl
                </th>
                <td className="px-6 py-4">trafflon1100</td>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  loginimpl
                </th>
                <td className="px-6 py-4">trafflon1100</td>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  loginimpl
                </th>
                <td className="px-6 py-4">trafflon1100</td>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  loginimpl
                </th>
                <td className="px-6 py-4">trafflon1100</td>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                >
                  loginimpl
                </th>
                <td className="px-6 py-4">trafflon1100</td>
                <td className="px-6 py-4">Running</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800">
              Murex Workflows
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of various workflows running status{" "}
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Workflow Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Titan HM
                </th>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Titan HM
                </th>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Titan HM
                </th>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Titan HM
                </th>
                <td className="px-6 py-4">Running</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Titan HM
                </th>
                <td className="px-6 py-4">Running</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800">
              Disk Utilization
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of various mounts on various servers and their current disk
                utilization
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Server
                </th>
                <th scope="col" className="px-6 py-3">
                  Mount
                </th>
                <th scope="col" className="px-6 py-3">
                  %used
                </th>
                <th scope="col" className="px-6 py-3">
                  %available
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  trafflon1100
                </th>
                <td className="px-6 py-4">/tmp</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">65</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  trafflon1100
                </th>
                <td className="px-6 py-4">/tmp</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">65</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  trafflon1100
                </th>
                <td className="px-6 py-4">/tmp</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">65</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  trafflon1100
                </th>
                <td className="px-6 py-4">/tmp</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">65</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  trafflon1100
                </th>
                <td className="px-6 py-4">/tmp</td>
                <td className="px-6 py-4">35</td>
                <td className="px-6 py-4">65</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800">
              Workflow Entries accumulated
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of tasks where workflow entries are accumulated{" "}
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Workflow Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Sheet Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Task Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Node
                </th>
                <th scope="col" className="px-6 py-3">
                  Current Entries (T)
                </th>
                <th scope="col" className="px-6 py-3">
                  Prior Entries (T-10mins)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Exchange
                </th>
                <td className="px-6 py-4">Titan HM</td>
                <td className="px-6 py-4">csvTransformRouter</td>
                <td className="px-6 py-4">64285</td>
                <td className="px-6 py-4">35845</td>
                <td className="px-6 py-4">45854</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Exchange
                </th>
                <td className="px-6 py-4">Titan HM</td>
                <td className="px-6 py-4">csvTransformRouter</td>
                <td className="px-6 py-4">64285</td>
                <td className="px-6 py-4">35845</td>
                <td className="px-6 py-4">45854</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Exchange
                </th>
                <td className="px-6 py-4">Titan HM</td>
                <td className="px-6 py-4">csvTransformRouter</td>
                <td className="px-6 py-4">64285</td>
                <td className="px-6 py-4">35845</td>
                <td className="px-6 py-4">45854</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Exchange
                </th>
                <td className="px-6 py-4">Titan HM</td>
                <td className="px-6 py-4">csvTransformRouter</td>
                <td className="px-6 py-4">64285</td>
                <td className="px-6 py-4">35845</td>
                <td className="px-6 py-4">45854</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Exchange
                </th>
                <td className="px-6 py-4">Titan HM</td>
                <td className="px-6 py-4">csvTransformRouter</td>
                <td className="px-6 py-4">64285</td>
                <td className="px-6 py-4">35845</td>
                <td className="px-6 py-4">45854</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800">
              CPB Monitoring
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of CPB entries in the 3 files
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Filename
                </th>
                <th scope="col" className="px-6 py-3">
                  Entries
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CPB_ENTRY_T0.csv
                </th>
                <td className="px-6 py-4">4</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CPB_ENTRY_T0.csv
                </th>
                <td className="px-6 py-4">0</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CPB_ENTRY_T0.csv
                </th>
                <td className="px-6 py-4">8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
//import nettingMockData from "../assets/nettingstatus.json";
const NettingStatus = () => {
  const [nettingData, setNettingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((config) => {
        setApiUrl(config.API_URL);
      })
      .catch(() => setError("⚠️ Failed to load config.json"));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;

    const fetchData = () => {
      setLoading(true);
      fetch(`${apiUrl}/api/netting`)
        .then((res) => {
          if (!res.ok) throw new Error("API request failed");
          return res.json();
        })
        .then((data) => {
          setNettingData(data);
          setError(null);
        })
        .catch(() => setError("⚠️ Error encountered, please check with ADMIN"))
        .finally(() => setLoading(false));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, [apiUrl]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-gray-800">
            Netting Status
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Netting status for date 16-Aug-25 (auto refresh evry 10 mins)
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                FileName
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {nettingData.map((file, fileIdx) => {
              // Choose background based on batch index
              const bgColor =
                fileIdx % 2 === 0 ? "bg-[#e6e7ee]" : "bg-[#dee0e7]";

              return file.status.map((statusItem, statusIdx) => (
                <tr
                  key={`${fileIdx}-${statusIdx}`}
                  className={`${bgColor} border-b dark:border-gray-700 border-gray-200`}
                >
                  {statusIdx === 0 && (
                    <th
                      rowSpan={file.status.length}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {file.fileName}
                    </th>
                  )}
                  <td className="px-6 py-4">{statusItem.name}</td>
                  <td className="px-6 py-4">{statusItem.count}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NettingStatus;

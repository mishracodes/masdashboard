import React, { useEffect, useState } from "react";
import eodMockstatus from "../assets/eodstatus.json";
import postingMockstates from "../assets/postingstates.json";
import systemMockdates from "../assets/systemdates.json";

const MurexEOD = () => {
  const [eodstatus, seteodstatus] = useState([]);
  const [postingstates, setpostingstates] = useState([]);
  const [systemdates, setsystemdates] = useState([]);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      seteodstatus(eodMockstatus);
      setpostingstates(postingMockstates);
      setsystemdates(systemMockdates);
    }, 500);
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900  dark:text-white dark:bg-gray-800">
            Murex EOD Status
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Please find murex EOD Status for date 16-Aug-25
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Block
              </th>
              <th scope="col" className="px-6 py-3">
                Start Time
              </th>
              <th scope="col" className="px-6 py-3">
                End Time
              </th>
              <th scope="col" className="px-6 py-3">
                Alloted Time
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {eodstatus.map((row, idx) => (
              <tr key={idx}>
                <th
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  scope="row"
                >
                  {row.block}
                </th>
                <td className="px-6 py-4">{row.startTime}</td>
                <td className="px-6 py-4">{row.endTime}</td>
                <td className="px-6 py-4">{row.allotedTime}</td>
                <td className="px-6 py-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] p-4 rounded-xl shadow-xl col-span-1 my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900  dark:text-white dark:bg-gray-800">
            System Dates
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Please find system dates
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff] dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Block
              </th>
              <th scope="col" className="px-6 py-3">
                Entity
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {systemdates.map((row, idx) => (
              <tr key={idx}>
                <th
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  scope="row"
                >
                  {row.block}
                </th>
                <td className="px-6 py-4">{row.entity}</td>
                <td className="px-6 py-4">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff]  rounded-xl shadow-xl my-5 p-5 text-lg font-semibold text-left rtl:text-right text-gray-900  dark:text-white dark:bg-gray-800">
        Posting Status
        {postingstates.length === 0 && (
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Posting was completed successfully for today. No Pending postings.
          </p>
        )}
        {postingstates.length != 0 && (
          <>
            <p className="mt-1 text-sm font-normal text-gray-500 mb-4 dark:text-gray-400">
              Please find pending postings below
            </p>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-[#e6e7ee] border border-[#d1d9e6] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] rounded-xl">
              <thead>
                <tr>
                  <th className="px-6 py-4 border-b">Date</th>
                  <th className="px-6 py-4 border-b">Error Type</th>
                  <th className="px-6 py-4 border-b">Count</th>
                  <th className="px-6 py-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {postingstates.map((row, idx) => (
                  <tr key={idx}>
                    <th
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      scope="row"
                    >
                      {row.date}
                    </th>
                    <td className="px-6 py-4">{row.errorType}</td>
                    <td className="px-6 py-4">{row.count}</td>
                    <td className="px-6 py-4">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default MurexEOD;

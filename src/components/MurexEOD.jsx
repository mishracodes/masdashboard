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
                EOD_DATE
              </th>
              <th scope="col" className="px-6 py-3">
                BLOCK_
              </th>
              <th scope="col" className="px-6 py-3">
                START_
              </th>
              <th scope="col" className="px-6 py-3">
                END_
              </th>
              <th scope="col" className="px-6 py-3">
                CUT_OFF
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                ENDED_STATUS_ERROR_CODE
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
                  {row.EOD_DATE}
                </th>
                <td className="px-6 py-4">{row.BLOCK_}</td>
                <td className="px-6 py-4">{row.START_}</td>
                <td className="px-6 py-4">{row.END_}</td>
                <td className="px-6 py-4">{row.CUT_OFF}</td>
                <td className="px-6 py-4">{row.STATUS}</td>
                <td className="px-6 py-4">{row.ENDED_STATUS_ERROR_CODE}</td>
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
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                LABEL
              </th>
              <th scope="col" className="px-6 py-3">
                M_DATE
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
                  {row.TYPE}
                </th>
                <td className="px-6 py-4">{row.LABEL}</td>
                <td className="px-6 py-4">{row.M_DATE}</td>
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
                  <th className="px-6 py-4 border-b">REPORTING_DATE</th>
                  <th className="px-6 py-4 border-b">POSTING_STATE</th>
                  <th className="px-6 py-4 border-b">COUNT</th>
                  <th className="px-6 py-4 border-b">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {postingstates.map((row, idx) => (
                  <tr key={idx}>
                    <th
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      scope="row"
                    >
                      {row.REPORTING_DATE}
                    </th>
                    <td className="px-6 py-4">{row.POSTING_STATE}</td>
                    <td className="px-6 py-4">{row.CNT}</td>
                    <td className="px-6 py-4">{row.COMMENTS}</td>
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

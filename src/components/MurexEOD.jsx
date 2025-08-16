import React from "react";

const MurexEOD = () => {
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
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Core
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                CTC
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Murcury
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Accounting
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Regulatory
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                TP_SQL_CLR
              </th>
              <td className="px-6 py-4">12:00</td>
              <td className="px-6 py-4">01:29</td>
              <td className="px-6 py-4">02:00</td>
              <td className="px-6 py-4">Completed</td>
            </tr>
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
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ACC
              </th>
              <td className="px-6 py-4">AP</td>
              <td className="px-6 py-4">20250816</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#e6e7ee] border border-[#d1d9e6] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#fff]  rounded-xl shadow-xl my-1 p-5 text-lg font-semibold text-left rtl:text-right text-gray-900  dark:text-white dark:bg-gray-800">
        Posting Status
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Posting was completed successfully for today. No Pending postings.
        </p>
      </div>
    </div>
  );
};

export default MurexEOD;

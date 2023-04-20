import React from "react";

const result = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Examination Results
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <form className="bg-white rounded-lg p-6">
              <label className="block text-gray-700 font-medium mb-2">
                Enter Roll Number:
              </label>
              <input
                className="border p-2 rounded-lg w-full"
                type="text"
                placeholder="Enter Roll Number"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">
                View Results
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white rounded-lg p-6">
              <table className="table-auto">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Total Marks</th>
                    <th className="px-4 py-2">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left">
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">English</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">80</td>
                  </tr>
                  <tr className="text-left">
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Urdu</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">90</td>
                  </tr>
                  <tr className="text-left">
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Physics</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">70</td>
                  </tr>
                  <tr className="text-left">
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Math</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">85</td>
                  </tr>
                  <tr className="text-left">
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">Pak Studies</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">95</td>
                  </tr>
                  <tr className="text-left">
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">Computer</td>
                    <td className="border px-4 py-2">100</td>
                    <td className="border px-4 py-2">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default result;

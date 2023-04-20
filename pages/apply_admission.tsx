import React from "react";

const ApplyForAdmission = () => {
  return (
    <form className="bg-white p-6 rounded">
      <h2 className="text-xl font-medium mb-4 text-center">
        Apply for Admission
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          type="tel"
          id="phone"
          name="phone"
          required
        />
      </div>

      <div className="mb-4">
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="program"
          >
            Program
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="program"
            name="program"
          >
            <option value="" disabled selected>
              Select a program
            </option>
            <option value="bs_computer_science">BS Computer Science</option>
            <option value="bs_medical">BS Medical</option>
            <option value="ics">ICS</option>
            <option value="fsc_pre_medical">FSC Pre Medical</option>
            <option value="fsc_pre_engineer">FSC Pre Engineer</option>
          </select>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ApplyForAdmission;

import React from "react";

const SpecificAnnouncement = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-medium text-center mb-4">Announcement</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
        <div className="lg:pr-4">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Announcement Image"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">New Scholarship Program</h2>
          <p className="text-gray-500 text-sm">
            <i className="fas fa-calendar" />
            <span className="ml-2">January 20th,2022</span>
          </p>
          <p className="text-gray-700 mt-4">
            We are excited to announce that we are launching a new scholarship
            program for engineering students. The scholarship will cover tuition
            fees for the successful candidates.
          </p>
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificAnnouncement;

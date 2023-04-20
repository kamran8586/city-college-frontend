import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-medium text-center mb-4">
        College Announcements
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-medium">Upcoming Events</h2>
          <ul className="list-none">
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-calendar" />
                </div>
                <div>
                  <p className="text-lg font-medium">Open House</p>
                  <p className="text-sm text-gray-500">January 20th</p>
                </div>
              </div>
            </li>
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-briefcase" />
                </div>
                <div>
                  <p className="text-lg font-medium">Career Fair</p>
                  <p className="text-sm text-gray-500">February 10th</p>
                </div>
              </div>
            </li>
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-music" />
                </div>
                <div>
                  <p className="text-lg font-medium">Spring Concert</p>
                  <p className="text-sm text-gray-500">March 15th</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium">Recent News</h2>
          <ul className="list-none">
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-book" />
                </div>
                <div>
                  <p className="text-lg font-medium">
                    New scholarship opportunity for engineering students
                  </p>
                </div>
              </div>
            </li>
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-flask" />
                </div>
                <div>
                  <p className="text-medium">
                    College receives grant for new science lab
                  </p>
                </div>
              </div>
            </li>
            <li className="border-b py-4">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-chalkboard-teacher" />
                </div>
                <div>
                  <p className="text-lg font-medium">
                    Professor publishes book on history of education
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

import React from "react";

const About = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-medium">About Us</h1>
        <p className="text-lg text-gray-600">
          Discover the story of our college and what makes us unique.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-6">
          <h2 className="text-xl font-medium mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We are committed to providing a holistic education that prepares
            students for personal and professional success. Our goal is to
            foster a diverse and inclusive community where all students have the
            opportunity to excel.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-6">
          <h2 className="text-xl font-medium mb-2">Our History</h2>
          <p className="text-gray-700 mb-4">
            Founded in [year], our college has a long-standing tradition of
            excellence in education. Throughout the years, we have adapted and
            evolved to meet the changing needs of our students and the wider
            community.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-6">
          <h2 className="text-xl font-medium mb-2">Our Programs</h2>
          <p className="text-gray-700 mb-4">
            We offer a wide range of undergraduate and graduate programs, as
            well as continuing education opportunities for professionals. Our
            curriculum is designed to provide students with the skills and
            knowledge they need to succeed in their chosen field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-6">
          <h2 className="text-xl font-medium mb-2">Our Community</h2>
          <p className="text-gray-700 mb-4">
            We are proud to be a part of a vibrant and engaged community. From
            student clubs and organizations to community outreach programs,
            there are many ways to get involved and make a difference at our
            college.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

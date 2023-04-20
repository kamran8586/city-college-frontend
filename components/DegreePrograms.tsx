import React from "react";

const Programs = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-10">
        Our Degree Programs
      </h2>
      <section className="grid grid-cols-12 container gap-8">
        <div className="md:col-span-6 col-span-full my-10">
          <img
            className="img-responsive"
            src="https://www.shutterstock.com/image-photo/group-computer-neatly-placed-lab-260nw-605958425.jpg"
            alt="computer"
            width={600}
          />
        </div>
        <div className="md:col-start-7 md:col-end-13 col-span-full my-10">
          <div className="flex flex-col gap-4 h-full">
            <h3 className="text-xl font-medium">BS in Computer Science</h3>
            <p>
              The BS in Computer Science at City College prepares students with
              a strong foundation in computer science theory and practice.
              Curriculum covers a wide range of topics including algorithms,
              data structures, programming languages, software engineering and
              computer systems. Graduates are well-prepared for careers in
              software development, systems administration and other related
              fields. Hands-on experience and industry connections are provided
              through research projects and internships
            </p>
            <button className="btn w-fit">Apply</button>
          </div>
        </div>
        <div className="md:col-span-6 col-span-full my-10">
          <img
            className="img-responsive"
            src="https://c8.alamy.com/comp/DD7JF8/developmental-biology-lab-in-yale-summer-school-students-looks-at-DD7JF8.jpg"
            alt="computer"
            width={600}
          />
        </div>
        <div className="md:col-start-7 md:col-end-13 col-span-full my-10">
          <div className="flex flex-col gap-4 h-full">
            <h3 className="text-xl font-medium">BS in Computer Science</h3>
            <p>
              The BS in Computer Science at City College prepares students with
              a strong foundation in computer science theory and practice.
              Curriculum covers a wide range of topics including algorithms,
              data structures, programming languages, software engineering and
              computer systems. Graduates are well-prepared for careers in
              software development, systems administration and other related
              fields. Hands-on experience and industry connections are provided
              through research projects and internships
            </p>
            <button className="btn w-fit">Apply</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;

import React from "react";

const WhyJoinUs = ({ data }: any) => {
  return (
    <div className="container grid grid-cols-12 gap-4 my-5">
      <div className="md:col-span-6 col-span-12">
        <img src={data.imageURL} alt="" className="object-cover" />
      </div>
      <div className="md:col-start-7 md:col-end-13 col-span-12">
        <div className=" p-4">
          <h2 className="text-lg font-medium">{data.title}</h2>
          <ul className="list-disc pl-6">
            {data.description.map((p: any, index: any) => {
              return <li key={index}>{p.point}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;

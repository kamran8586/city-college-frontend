import React from "react";

const Card = ({ title, content }: any) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden col-span-3">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="card image"
      />
      <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">
          #tag2
        </span>
      </div>
    </div>
  );
};

export default Card;

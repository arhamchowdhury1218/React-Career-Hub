import React from "react";

const CategoryList = ({ category }) => {
  console.log("Rendering CategoryList:", category);
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center md:text-left">
      <img
        src={logo}
        alt="Category Logo"
        className="w-16 h-16 object-contain mb-2 text-center md:text-left mx-auto md:mx-0"
      />
      <h2 className="text-xl font-semibold">{category_name}</h2>
      <p className="text-gray-600">{availability}</p>
    </div>
  );
};

export default CategoryList;

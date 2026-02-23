import React from "react";

const FeaturedJob = ({ job }) => {
  console.log("Rendering FeaturedJob:", job);
  const { logo, job_description } = job;
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <img
        src={logo}
        alt="Company Logo"
        className="w-16 h-16 object-contain mb-2"
      />
      <p>{job_description}</p>
    </div>
  );
};

export default FeaturedJob;

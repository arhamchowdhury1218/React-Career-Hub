import React from "react";

const AppliedJob = ({ appliedJob }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, salary } =
    appliedJob;
  console.log(appliedJob);
  return (
    // flex flex-col lg:flex-row gap-4 lg:gap-80 items-center my-1 lg:my-7
    <div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-80 items-center my-1 lg:my-7">
        <img className="w-20 h-20" src={logo} alt="" srcset="" />
        <div className="">
          <h4 className="font-semibold">{job_title}</h4>
          <h4 className="font-light">{company_name}</h4>
          <div className="badge badge-outline badge-primary">
            {remote_or_onsite}
          </div>
          <div className="flex gap-2 my-3">
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-location-dot"></i>
              <p className="text-gray-600">{location}</p>
            </div>

            <div className="flex gap-1 items-center ">
              <i className="fa-solid fa-dollar-sign"></i>
              <p className="text-gray-600">{salary}</p>
            </div>
          </div>
        </div>

        <div>
          <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;

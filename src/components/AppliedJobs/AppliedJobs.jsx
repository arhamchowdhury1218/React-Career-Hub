import { use, useEffect, useState } from "react";
import { getAppliedJobs } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const appliedJobIds = getAppliedJobs();
    const appliedJobs = jobs.filter((job) => appliedJobIds.includes(job.id));
    setAppliedJobs(appliedJobs);
  }, []);
  return (
    <div>
      <div className="flex items-center mt-10">
        <img
          className="hidden md:block lg:h-60 lg:w-60 py-10"
          src="/assets/images/bg1.png"
          alt=""
        />
        <h1 className="text-3xl font-bold mx-auto md:mx-160">Applied Jobs</h1>
      </div>
      <div className="w-9/12 mx-auto"></div>
    </div>
  );
};

export default AppliedJobs;

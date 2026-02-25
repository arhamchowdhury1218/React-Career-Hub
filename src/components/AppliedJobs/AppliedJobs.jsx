import { use, useEffect, useState } from "react";
import { getAppliedJobs } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote",
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite",
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const appliedJobIds = getAppliedJobs();
    const appliedJobs = jobs.filter((job) => appliedJobIds.includes(job.id));

    setAppliedJobs(appliedJobs);
    setDisplayJobs(appliedJobs);
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

      <div className="w-7/12 mx-auto">
        <div className="text-right">
          <details className="dropdown">
            <summary className="btn m-1">Filter</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displayJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

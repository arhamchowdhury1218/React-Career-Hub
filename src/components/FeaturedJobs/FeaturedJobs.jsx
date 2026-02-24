import React from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = React.useState([]);

  const [dataLength, setDataLength] = React.useState(4);

  React.useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setFeaturedJobs(data))
      .catch((error) => console.error("Error fetching featured jobs:", error));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Featured Jobs: {featuredJobs.length}
        </h1>
        <p className="text-xl mt-4">
          Discover and apply to the most popular job listings in your field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          {featuredJobs.slice(0, dataLength).map((job) => {
            return <FeaturedJob key={job.id} job={job}></FeaturedJob>;
          })}
        </div>
      </div>
      <div className="text-center">
        {dataLength < featuredJobs.length && (
          <button
            className="btn btn-primary"
            onClick={() => setDataLength(featuredJobs.length)}
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;

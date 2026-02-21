import React from "react";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = React.useState([]);

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
      </div>
    </div>
  );
};

export default FeaturedJobs;

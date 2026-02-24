import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();
  console.log("Job data loaded:", jobData);
  const { id } = useParams();
  const job = jobData.find((job) => job.id === parseInt(id));
  console.log("Job found:", job);
  return <div>JobDetails</div>;
};

export default JobDetails;

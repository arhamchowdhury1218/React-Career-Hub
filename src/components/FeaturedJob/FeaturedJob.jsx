import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  console.log("Rendering FeaturedJob:", job);
  const {
    logo,
    job_description,
    job_title,
    company_name,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="rounded-lg mb-4 text-left w-9/12 mx-auto p-6">
      <img src={logo} alt="Company Logo" className="w-16 h-16 mb-2 text-left" />
      <h5 className="text-lg font-semibold">{job_title}</h5>

      <p className="text-gray-600">{company_name}</p>
      <div className="badge badge-outline badge-primary">{job_type}</div>
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

      <Link to={`/job/${job.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
};

export default FeaturedJob;

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobData = useLoaderData();
  console.log("Job data loaded:", jobData);
  const { id } = useParams();
  const job = jobData.find((job) => job.id === parseInt(id));
  console.log("Job found:", job);
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
  } = job;
  const notify = () => {
    saveJobApplication(parseInt(id));
    toast("Job Applied Successfully!");
  };
  return (
    <div>
      <div className="flex items-center mt-10">
        <img
          className="hidden md:block lg:h-60 lg:w-60 py-10"
          src="/assets/images/bg1.png"
          alt=""
        />
        <h1 className="text-3xl font-bold mx-auto md:mx-160">Job Details</h1>
      </div>
      <div className="w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-3 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-light text-gray-500 ">
              <span className="text-black font-semibold mr-1">
                Job Description:
              </span>{" "}
              {job_description}
            </h2>

            <h2 className="text-xl font-light text-gray-500 my-4">
              <span className="text-black font-semibold mr-1">
                Job Responsibility:
              </span>
              {job_responsibility}
            </h2>

            <h2 className="text-xl font-light text-gray-500 my-4">
              <span className="text-black font-semibold mr-1">
                Educational Requirements:
              </span>
              {educational_requirements}
            </h2>
            <h2 className="text-xl font-light text-gray-500 my-4">
              <span className="text-black font-semibold mr-1">
                Experiences:
              </span>
              {experiences}
            </h2>
          </div>
          <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Job Details</h3>
            <hr className="border border-gray-300" />
            <div className="mt-5">
              <div className="flex gap-2 items-center mb-2">
                <i className="fa-solid fa-dollar-sign"></i>
                <p className="font-semibold">Salary: ${salary} per month</p>
              </div>

              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-briefcase"></i>
                <p className="font-semibold">Job Title: {job_title}</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold my-4">Contact Information</h3>
            <hr className="border border-gray-300" />
            <div className="mt-5">
              <div className="flex gap-2 items-center mb-2">
                <i className="fa-solid fa-phone"></i>
                <p className="font-semibold">
                  Phone: ${contact_information.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <i className="fa-solid fa-envelope"></i>
                <p className="font-semibold">
                  Email: ${contact_information.email}
                </p>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <i className="fa-solid fa-location-arrow"></i>
                <p className="font-semibold">
                  Address: ${contact_information.address}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={notify}
                className="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
              >
                Apply Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

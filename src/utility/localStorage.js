const saveJobApplication = (id) => {
  let appliedJobs = JSON.parse(localStorage.getItem("applied-jobs")) || [];
  if (!appliedJobs.includes(id)) {
    appliedJobs.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

const getAppliedJobs = () => {
  return JSON.parse(localStorage.getItem("applied-jobs")) || [];
};

export { saveJobApplication, getAppliedJobs };

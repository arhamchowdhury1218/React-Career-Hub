import React from "react";

const Banner = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="./assets/images/user.png" className="max-w-sm rounded-lg" />
        <div className="">
          <h1 className="text-5xl font-bold">
            One Step <br /> <span className="text-primary">Closer To Your</span>
            <br />
            Dream Job
          </h1>
          <p className="py-6 max-w-1.5xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

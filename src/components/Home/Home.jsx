import React from "react";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CategoryLists from "../CategoryLists/CategoryLists";

const Home = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Banner />
      <CategoryLists></CategoryLists>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;

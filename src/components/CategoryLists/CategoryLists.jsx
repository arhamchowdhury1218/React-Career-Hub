import React from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryLists = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <p className="text-xl mt-4">
          Explore job categories that match your interests and skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          {categories.map((category) => (
            <CategoryList key={category.id} category={category}></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryLists;

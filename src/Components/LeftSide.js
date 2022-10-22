import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="  ">
      <h1 className=" text-4xl mb-6">Total Categories : {categories.length}</h1>
      {categories.map((category) => (
        <p key={category.id}>
          <button className="btn btn-outline mb-4">
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </button>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;

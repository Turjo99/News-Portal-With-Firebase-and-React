import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "./DynamicRoutes/NewsSummary";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1>Total News {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummary news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default Home;

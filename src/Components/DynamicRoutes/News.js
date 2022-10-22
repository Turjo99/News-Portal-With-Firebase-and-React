import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "./NewsSummary";

const News = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h2>{categoryNews.length}</h2>
      {/* {categoryNews.map((news) => {
        console.log(news);
        <NewsSummary key={news._id} news={news}></NewsSummary>;
      })} */}
    </div>
  );
};

export default News;

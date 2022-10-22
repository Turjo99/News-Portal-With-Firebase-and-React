import React from "react";

const NewsSummary = ({ news }) => {
  console.log(news);
  return (
    <div>
      <div className="card card-compact w-100 mb-10 bg-base-100 shadow-xl">
        <figure>
          <img src={news.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummary;

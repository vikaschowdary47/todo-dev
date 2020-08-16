import React from "react";
import Card from "./Card";

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Card news={article.author} image={article.urlToImage} />
      ))}
      <pre>{JSON.stringify(articles, null, 2)}</pre>;
    </div>
  );
};

export default Articles;

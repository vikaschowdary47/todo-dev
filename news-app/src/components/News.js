import React from "react";
import useSwr from "swr";
import Articles from "./Articles";

const News = ({ fetcher }) => {
  const API_KEY = "e36c8bba4f67445db521ec31b0c50748";
  const url = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`;

  //   const [news, setNews] = React.useState([]);
  const { data, error } = useSwr(url, fetcher);
  if (error) return <h1>failing to load</h1>;
  if (!data) return <h1>loading....</h1>;

  return <Articles articles={data.articles} />;
};

export default News;

import React, { Fragment, useContext } from "react";
import { FlybusContext } from "../../context/context";
import Hero from "../../components/Hero/Hero";
import "./marketOutlook.scss";

const MarketOutlook = () => {
  const { articles, loading, addLineBreak } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }

  const article = articles[1];
  return (
    <Fragment>
      <Hero src={article.image[1]} title={article.title} />
      <div className="section">
        <div className="row">
          <div className="text-content">
            <h3 className="m-heading">{article.titleSub}</h3>
            <p>{addLineBreak(article.content)}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MarketOutlook;

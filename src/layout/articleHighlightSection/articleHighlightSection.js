import React from "react";
import ArticleHighlight from "../../components/ArticleHighlight/ArticleHighlight";
import data from "../../data";

const articleHighlightSection = () => {
  const renderedArticles = data.articles.map((article) => (
    <ArticleHighlight
      key={article.id}
      image={article.image}
      title={article.title}
      url={article.url}
    />
  ));

  return (
    <div data-testid="article-highlight-sec" className="section">
      {renderedArticles}
    </div>
  );
};

export default articleHighlightSection;

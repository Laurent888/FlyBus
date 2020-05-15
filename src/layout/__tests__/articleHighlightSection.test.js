import React from "react";
import { render, screen, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import ArticleHighlightSection from "../articleHighlightSection/articleHighlightSection";

describe("Article highlight test", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <ArticleHighlightSection />
      </BrowserRouter>
    );

    const component = screen.getByTestId("article-highlight-sec");

    expect(component).toBeInTheDocument();
  });
});

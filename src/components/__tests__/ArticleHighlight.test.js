import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import ArticleHighlight from "../ArticleHighlight/ArticleHighlight";

describe("Article highlight", () => {
  it("Render the component", () => {
    render(
      <BrowserRouter>
        <ArticleHighlight image={["image"]} title="some title" url="url" />
      </BrowserRouter>
    );

    const title = screen.getByText("some title");

    expect(title).toBeInTheDocument();
  });
});

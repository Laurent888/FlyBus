import React from "react";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import ArticleHighlight from "./ArticleHighlight";

describe("Article highlight", () => {
  it("Render the component", () => {
    render(<ArticleHighlight image={["image"]} title="some title" url="url" />);

    const title = screen.getByText("some title");

    expect(title).toBeInTheDocument();
  });
});

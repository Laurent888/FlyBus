import React from "react";

import FooterCredit from "./FooterCredit";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Footer", () => {
  it("render footer", () => {
    render(<FooterCredit />);

    const copyright = screen.getByText(/copyright/i);

    expect(copyright).toBeInTheDocument();
  });
});

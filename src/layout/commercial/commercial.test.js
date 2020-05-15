import React from "react";
import { render, screen } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import Commercial from "./commercial";

describe("Commercial page", () => {
  it("should render the component", () => {
    render(<Commercial />);

    const flybus = screen.getByText(/flybus/i);
    const description = screen.getByText(/Airplanes/i);
    const title = screen.getByText(/f320/i);

    expect(flybus).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

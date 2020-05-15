import React from "react";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import AircraftCard from "./AircraftCard";

describe("Aircraft card", () => {
  it("Render the component", () => {
    render(
      <AircraftCard match={{ path: "some path" }} title="plane" src="image" />
    );

    const heading = screen.getByText("plane");
    expect(heading).toBeInTheDocument();
  });
});

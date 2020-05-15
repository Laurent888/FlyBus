import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AircraftCard from "../Card/AircraftCard/AircraftCard";
import { BrowserRouter } from "react-router-dom";

describe("Aircraft card", () => {
  it("Render the component", () => {
    render(
      <BrowserRouter>
        <AircraftCard match={{ path: "some path" }} title="plane" src="image" />
      </BrowserRouter>
    );

    const heading = screen.getByText("plane");
    expect(heading).toBeInTheDocument();
  });
});

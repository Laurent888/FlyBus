import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AircraftGrid from "../aircraftGrid/aircraftGrid";
import { BrowserRouter } from "react-router-dom";

const aircraft = [
  {
    id: "ac1",
    name: "F220",
    image: "img1",
    singlePage: {
      description: {
        title: "The best of two world",
        content:
          "Flybus global reach and scale combines with Behring's state-of-the-art jetliner in the F220 Family, which is now being produced in a partnership between Flybus and Bombardier.Flybus manufactures, markets, and supports F220 Family aircraft through the Flybus-Bombardier partnership, with Behring's two jetliners – previously designated the C Series – being brought into the Flybus commercial aircraft line-up. <br /> These aircraft expand the Flybus single-aisle family to cover the 100-150 seat segment – and respond to a worldwide market demand for smaller single-aisle jetliners.",
        image: "img1Single",
      },
      specification: {
        seats: 120,
        maxSeats: 135,
        length: 35,
        wingspan: 35.1,
        height: 11.8,
        engine: "Aurora CX14",
        price: 91.5,
      },
    },
  },
];

describe("AircraftGrid page", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <AircraftGrid aircraft={aircraft} />
      </BrowserRouter>
    );

    const title = screen.getByText("Current Products");
    const aircraftName = screen.getByText("F220");

    expect(title).toBeInTheDocument();
    expect(aircraftName).toBeInTheDocument();
  });
});

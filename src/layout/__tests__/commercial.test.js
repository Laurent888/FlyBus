import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Commercial from "../commercial/commercial";
import { BrowserRouter } from "react-router-dom";

import { FlybusContext } from "../../context/context";

const contextValue = {
  aircraft: [
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
  ],
  homepageDescription: [
    {
      description1: {
        title: "Flybus Commercial Airplanes: A Better Way To Fly.",
        content: "some content text",
      },
    },
  ],
  addLineBreak: jest.fn(),
};

describe("Commercial page", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <FlybusContext.Provider value={contextValue}>
          <Commercial />
        </FlybusContext.Provider>
      </BrowserRouter>
    );

    const flybus = screen.getByText(/flybus/i);
    const description = screen.getByText(/Airplanes/i);
    const title = screen.getByText(/f220/i);

    expect(flybus).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

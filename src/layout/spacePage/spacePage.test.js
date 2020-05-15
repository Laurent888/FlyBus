import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FlybusContext } from "../../context/context";

import SpacePage from "./spacePage";

describe("Space Page", () => {
  const contextValue = {
    addLineBreak: jest.fn(),
    space: [
      {
        description1: {
          image: "iioretioe",
        },
      },
      {
        products: [
          {
            id: "space1",
            name: "NEOSSAT",
            image: "sat1",
            singlePage: {
              description: {
                title: "Satellite Telecommunication missions and applications",
                content:
                  "A product of choice with major operators worldwide, the Eurostar series of high performance communications satellites is suited to all communications missions, is compatible with the whole range of launch vehicles and is the benchmark in the industry for in-orbit reliability.",
                image: "sat1",
              },
              specification: {
                price: 152,
              },
            },
          },
        ],
      },
    ],
    isDarkTheme: true,
    loading: false,
  };

  it("render the space page", () => {
    render(
      <BrowserRouter>
        <FlybusContext.Provider value={contextValue}>
          <SpacePage />
        </FlybusContext.Provider>
      </BrowserRouter>
    );

    const productName = screen.getByText(/neossat/i);
    const darkThemeClass = screen.getByTestId("aircraftGrid-container");

    expect(productName).toBeInTheDocument();
    expect(darkThemeClass).toHaveClass("darkTheme");
  });
});

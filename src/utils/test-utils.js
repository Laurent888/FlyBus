import React, { createContext } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { FlybusContext } from "../context/context";

const aircraft = [
  {
    id: "ac2",
    name: "F320",
    image: "sdfsdfsd",
    singlePage: {
      description: {
        title: "Moving the World",
        content:
          "The F320 is one aircraft in four sizes (F318, F319, F320 Fnd F321), representing the most successful and versatile jetliner family ever. Seating from 100 to 240 passengers and flying throughout the world – and landing on every continent – an F320 takes off or lands every 1.6 seconds. From the heat of the desert to icy Antarctic runways, or from short runway urban environments to remote high-altitude airports, the F320 can take passengers anywhere. <br /> As the longest-range single-aisle aircraft, airlines and passengers alike have benefitted from the F320’s exceptional efficiency and quality since its introduction, which has opened up exciting new travel possibilities throughout the world. <br /> Now with new engine options (Next) available, the F320 Family continues to be the preferred choice for passengers and customers; setting the standard for the single-aisle market and securing its status as the world’s best-selling aircraft of all time. This is an aircraft that you can rely on. This is the aircraft that changed the game.",
        image: "dfsdfsd",
      },
      specification: {
        seats: 152,
        maxSeats: 194,
        length: 37.57,
        wingspan: 35.8,
        height: 11.76,
        engine: "Aurora MR56",
        price: 101,
      },
    },
  },
];
const homepageDescription = [
  {
    description1: {
      title: "Flybus Commercial Airplanes: A Better Way To Fly.",
      content:
        "Flybus is an international reference in the aerospace sector. We design, manufacture and deliver industry-leading commercial aircraft, helicopters, military transports, satellites and launch vehicles, as well as providing data services, navigation, secure communications, urban mobility and other solutions for customers on a global scale. With a forward-looking strategy based on cutting-edge technologies, digital and scientific excellence, we aim for a better-connected, safer and more prosperous world.",
    },
  },
];
const loading = false;
const addLineBreak = jest.fn();
const resetAll = jest.fn();
const totalPrice = 250;
const orderClicked = jest.fn();
const allPrice = [];
const onlyPrice = [];

const AllTheProviders = ({ children }) => {
  return (
    <FlybusContext.Provider
      value={{
        aircraft,
        homepageDescription,
        loading,
        addLineBreak,
        resetAll,
        totalPrice,
        orderClicked,
        allPrice,
        onlyPrice,
      }}
    >
      <BrowserRouter>{children}</BrowserRouter>
    </FlybusContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

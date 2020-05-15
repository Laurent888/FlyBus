import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  screen,
  fireEvent,
  prettyDOM,
  waitForElement,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FlybusContext, FlybusProvider } from "../../context/context";

import OrderPage from "./orderPage";

describe("Order page", () => {
  const resetAll = jest.fn();
  it("Render the component", () => {
    render(
      <BrowserRouter>
        <FlybusContext.Provider
          value={{ resetAll, allPrice: [], totalPrice: 100 }}
        >
          <OrderPage />
        </FlybusContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/order page/i)).toBeInTheDocument();
    expect(screen.getByText(/clear all/i)).toBeInTheDocument();
    expect(screen.getByText(/total price/i)).toBeInTheDocument();
    expect(screen.getByTestId("totalPrice")).toHaveTextContent("100");
    fireEvent.click(screen.getByText(/clear all/i));
    expect(resetAll).toBeCalled();
  });

  it("Add price when select a product", async () => {
    render(
      <BrowserRouter>
        <FlybusProvider>
          <OrderPage />
        </FlybusProvider>
      </BrowserRouter>
    );

    const buttonAddAc1 = screen.getByTestId("test-add-ac1");
    const totalPrice = screen.getByTestId("totalPrice");

    expect(totalPrice).toHaveTextContent("0");

    fireEvent.click(buttonAddAc1);

    const newTotal = await waitForElement(() =>
      screen.getByTestId("totalPrice")
    );
    expect(newTotal).not.toHaveTextContent("0");
  });
});

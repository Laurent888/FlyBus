import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import ButtonLarge from "../Buttons/ButtonLarge/ButtonLarge";

describe("Button large", () => {
  const clicked = jest.fn();

  it("Render the component", () => {
    render(
      <BrowserRouter>
        <ButtonLarge btnType="some type" label="some label" clicked={clicked} />
      </BrowserRouter>
    );

    const label = screen.getByText("some label");

    expect(label).toBeInTheDocument();
  });
});

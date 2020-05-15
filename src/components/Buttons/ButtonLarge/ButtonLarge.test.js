import React from "react";
import { render, screen } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import ButtonLarge from "./ButtonLarge";

describe("Button large", () => {
  const clicked = jest.fn();

  it("Render the component", () => {
    render(
      <ButtonLarge btnType="some type" label="some label" clicked={clicked} />
    );

    const label = screen.getByText("some label");

    expect(label).toBeInTheDocument();
  });
});

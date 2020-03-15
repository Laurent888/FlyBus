import React from "react";
import { shallow } from "enzyme";
import ButtonLarge from "./ButtonLarge";

describe("Button Large", () => {
  const btnType = "btnPrimary";
  const label = "test";
  const clicked = () => console.log("ok");

  const wrapper = shallow(
    <ButtonLarge btnType={btnType} label={label} clicked={clicked} />
  );

  it("should render button large", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have TEXT in the label", () => {
    expect(wrapper.text()).toBe("test");
  });
});

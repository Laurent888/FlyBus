import React from "react";

import FooterCredit from "./FooterCredit";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("render footer", () => {
    const wrapper = shallow(<FooterCredit />);

    expect(wrapper.find("p").length).toBe(1);
  });
});

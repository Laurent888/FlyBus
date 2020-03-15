import React from "react";
import { shallow } from "enzyme";
import ArticleHightlight from "./ArticleHighlight";
import image from "../../img/a320-thumb.jpg";

describe("Article hightlight", () => {
  const image2 = [image];
  const title = "Test Title";
  const url = "http://test.com";

  it("should render article hightlight", () => {
    const wrapper = shallow(
      <ArticleHightlight image={image2} title={title} url={url} />
    );

    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});

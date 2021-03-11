import React from "react";
import renderer from "react-test-renderer";
import MailView from "./MailView";

describe("MAIL TEMPLATE COMPONENT", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MailView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

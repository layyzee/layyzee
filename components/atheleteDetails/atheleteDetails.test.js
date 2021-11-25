import React from "react";
import { shallow } from "enzyme";
import AtheleteDetails from "./atheleteDetails";

describe("AtheleteDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AtheleteDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});

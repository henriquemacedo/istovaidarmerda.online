import React from "react";
import { render } from "@testing-library/react";
import { SkipLink } from "./link";

describe("<SkipLink>", () => {
  it("should render without error", () => {
    const component = render(<SkipLink />);
    expect(component).toMatchSnapshot();
  });
});

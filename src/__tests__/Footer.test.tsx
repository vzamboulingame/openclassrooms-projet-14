import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  test("should render properly", () => {
    const component = render(<Footer />);

    expect(component).toBeTruthy();
  });

  test("should have a copyright notice", () => {
    const component = render(<Footer />);

    const text = component.getByText(/© \d{4} HRNet. All rights reserved./i);
    expect(text).toBeInTheDocument();
  });
});

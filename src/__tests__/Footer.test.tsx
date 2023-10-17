import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  test("Footer renders properly", () => {
    const component = render(<Footer />);

    expect(component).toBeTruthy();
  });

  test("Footer contains a copyright notice", () => {
    const component = render(<Footer />);

    const text = component.getByText(/© \d{4} HRNet. All rights reserved./i);
    expect(text).toBeInTheDocument();
  });
});

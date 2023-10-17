import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  test("Footer renders properly", () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toBeTruthy();
  });

  test("Footer contains a copyright notice", () => {
    const wrapper = render(<Footer />);
    const text = wrapper.getByText(/© \d{4} HRNet. All rights reserved./i);
    expect(text).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  it("should render properly", () => {
    const component = render(<Footer />);

    expect(component).toBeTruthy();
  });

  it("should have a copyright notice", () => {
    const component = render(<Footer />);

    const text = component.getByText(/© \d{4} HRNet. All rights reserved./i);
    expect(text).toBeInTheDocument();
  });
});

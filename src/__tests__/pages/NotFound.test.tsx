import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound";

describe("<NotFound />", () => {
  test("should render properly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });

    expect(component).toBeTruthy();
  });

  test("should render an error image with the correct alt text", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });

    const errorImage = component.getByAltText("404 Error Image");
    expect(errorImage).toBeInTheDocument();
  });

  test("should render the error title correctly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });

    const errorTitle = component.getByRole("heading", { level: 1 });
    expect(errorTitle).toBeInTheDocument();
    expect(errorTitle.textContent).toBe("Page not found !");
  });

  it("should render the back to homepage link correctly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });

    const homepageLink = component.getByText("Back to homepage");

    expect(homepageLink).toBeInTheDocument();
    expect(homepageLink).toHaveAttribute("href", "/");
  });
});

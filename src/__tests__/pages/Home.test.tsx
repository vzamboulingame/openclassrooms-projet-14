import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("<Home />", () => {
  test("should render properly", () => {
    const component = render(<Home />, { wrapper: MemoryRouter });

    expect(component).toBeTruthy();
  });

  test("should have a banner image with the correct alt text", () => {
    const component = render(<Home />, { wrapper: MemoryRouter });

    const bannerImage = component.getByAltText("Banner Image");
    expect(bannerImage).toBeInTheDocument();
  });

  test("should render the welcome title correctly", () => {
    const component = render(<Home />, { wrapper: MemoryRouter });

    const welcomeTitle = component.getByRole("heading", { level: 1 });
    expect(welcomeTitle).toBeInTheDocument();
    expect(welcomeTitle.textContent).toBe("Welcome to HRNet");
  });

  it("should render the welcome message correctly", () => {
    const component = render(<Home />, { wrapper: MemoryRouter });

    const welcomeMessage = component.getByRole("heading", { level: 2 });

    expect(welcomeMessage).toBeInTheDocument();
    expect(welcomeMessage.textContent).toBe(
      "Your one-stop solution for managing employees.",
    );
  });
});

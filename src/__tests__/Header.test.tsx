import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Header from "../components/Header";

describe("<Header />", () => {
  test("renders properly", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    expect(component).toBeTruthy();
  });

  test("contains a svg logo", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const logo = component.container.querySelector("svg");
    expect(logo).toBeTruthy();
  });

  test("contains an h1 element with the expected class names and text", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const h1Element = component.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveClass("text-4xl font-bold md:text-3xl sm:text-2xl");
    expect(h1Element).toHaveTextContent("HRNet");
  });

  test("contains NavLinks with the expected class names and text", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const employeeListNavLink = component.getByText("Employee list");
    expect(employeeListNavLink).toBeInTheDocument();
    expect(employeeListNavLink).toHaveTextContent("Employee list");
    expect(employeeListNavLink).toHaveClass(
      "transition duration-150 hover:text-blue-500 hover:underline",
    );

    const addEmployeeNavLink = component.getByText("Add employee");
    expect(addEmployeeNavLink).toBeInTheDocument();
    expect(addEmployeeNavLink).toHaveTextContent("Add employee");
    expect(addEmployeeNavLink).toHaveClass(
      "transition duration-150 hover:text-blue-500 hover:underline",
    );
  });

  test("Employee List NavLink is rendered with the correct class when it is active", async () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const user = userEvent.setup();

    const employeeListNavLink = component.getByText("Employee list");
    const addEmployeeNavLink = component.getByText("Add employee");

    await user.click(employeeListNavLink);

    expect(employeeListNavLink).toHaveClass("text-blue-500");
    expect(addEmployeeNavLink).not.toHaveClass("text-blue-500");
  });

  test("Add Employee NavLink is rendered with the correct class when it is active", async () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const user = userEvent.setup();

    const employeeListNavLink = component.getByText("Employee list");
    const addEmployeeNavLink = component.getByText("Add employee");

    await user.click(addEmployeeNavLink);

    expect(addEmployeeNavLink).toHaveClass("text-blue-500");
    expect(employeeListNavLink).not.toHaveClass("text-blue-500");
  });
});

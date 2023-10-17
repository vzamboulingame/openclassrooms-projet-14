import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../../components/Header";

describe("<Header />", () => {
  test("should render properly", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    expect(component).toBeTruthy();
  });

  test("should have a svg logo", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const logo = component.container.querySelector("svg");
    expect(logo).toBeTruthy();
  });

  test("should have 3 links with the expected class names", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const linkElements = component.getAllByRole("link");
    expect(linkElements).toHaveLength(3);

    const homeLink = linkElements[0];
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass(
      "flex items-center justify-between gap-4 transition duration-150 hover:text-blue-500",
    );

    const employeeListLink = linkElements[1];
    expect(employeeListLink).toBeInTheDocument();
    expect(employeeListLink).toHaveClass(
      "transition duration-150 hover:text-blue-500 hover:underline",
    );

    const addEmployeeLink = linkElements[2];
    expect(addEmployeeLink).toBeInTheDocument();
    expect(addEmployeeLink).toHaveClass(
      "transition duration-150 hover:text-blue-500 hover:underline",
    );
  });

  test("should have an EmployeeList NavLink rendered with the correct class when it is active", async () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const user = userEvent.setup();

    const employeeListNavLink = component.getByText("Employee list");
    const addEmployeeNavLink = component.getByText("Add employee");

    await user.click(employeeListNavLink);

    expect(employeeListNavLink).toHaveClass("text-blue-500");
    expect(addEmployeeNavLink).not.toHaveClass("text-blue-500");
  });

  test("should have an AddEmployee NavLink rendered with the correct class when it is active", async () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const user = userEvent.setup();

    const employeeListNavLink = component.getByText("Employee list");
    const addEmployeeNavLink = component.getByText("Add employee");

    await user.click(addEmployeeNavLink);

    expect(addEmployeeNavLink).toHaveClass("text-blue-500");
    expect(employeeListNavLink).not.toHaveClass("text-blue-500");
  });
});

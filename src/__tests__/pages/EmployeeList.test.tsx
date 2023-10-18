import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useEmployeeStore } from "../../utils/store";
import EmployeeList from "../../pages/EmployeeList";

describe("<EmployeeList />", () => {
  it("should render properly", () => {
    const component = render(<EmployeeList />, { wrapper: MemoryRouter });

    expect(component).toBeTruthy();
  });

  it("should render the title correctly", () => {
    const component = render(<EmployeeList />, { wrapper: MemoryRouter });

    const title = component.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("Current Employees");
  });

  it("should render the DataGrid component correctly", () => {
    const component = render(<EmployeeList />, { wrapper: MemoryRouter });

    const dataGrid = component.container.querySelector(".MuiDataGrid-root");
    expect(dataGrid).toBeInTheDocument();
  });

  it("should render the pagination select input with the correct default value", () => {
    const component = render(<EmployeeList />, { wrapper: MemoryRouter });

    const paginationSelect = component.container.querySelector(
      ".MuiTablePagination-select",
    );
    expect(paginationSelect?.textContent).toBe("5");
  });

  it("should initialize the employeeDataArray in the Zustand store with the correct length", () => {
    render(<EmployeeList />, { wrapper: MemoryRouter });

    const employeeDataArray = useEmployeeStore.getState().employeeDataArray;

    expect(employeeDataArray).toBeTruthy();
    expect(employeeDataArray.length).toBe(50);
  });

  it("should initialize the employeeDataStorage in localStorage", () => {
    render(<EmployeeList />, { wrapper: MemoryRouter });

    expect(localStorage.getItem("hasInitializedData")).toBeTruthy();
    expect(localStorage.getItem("employeeDataStorage")).toBeTruthy();
  });

  it("should render datagrid with specific font size and border on non mobile screens", () => {
    const component = render(<EmployeeList />, { wrapper: MemoryRouter });

    const dataGrid = component.container.querySelector(".MuiDataGrid-root");
    expect(dataGrid).toHaveStyle("font-size: 1rem");
    expect(dataGrid).toHaveStyle("border: 1px solid #e0e0e0");
  });
});

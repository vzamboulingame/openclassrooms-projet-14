import { StateOptions, DepartmentOptions } from "./enums";

export interface EmployeeData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: StateOptions;
  zipCode: string;
  department: DepartmentOptions;
  startDate: string;
}

export interface EmployeeStore {
  employeeDataArray: EmployeeData[];
  addEmployeeData: (data: EmployeeData) => void;
}

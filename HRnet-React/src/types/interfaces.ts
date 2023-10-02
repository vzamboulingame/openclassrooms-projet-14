export interface EmployeeData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
  startDate: string;
}

export interface EmployeeStore {
  employeeDataArray: EmployeeData[];
  addEmployeeData: (data: EmployeeData) => void;
}

import { create } from "zustand";
import { EmployeeStore } from "../types/interfaces";
import { devtools, persist } from "zustand/middleware";
import { StateOptions, DepartmentOptions } from "../types/enums";
import { faker } from "@faker-js/faker";

const shouldInitializeData = !localStorage.getItem("hasInitializedData");

function generateFakeData() {
  const fakeData = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.past().toISOString().substring(0, 10),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.helpers.enumValue(StateOptions),
    zipCode: faker.location.zipCode(),
    department: faker.helpers.enumValue(DepartmentOptions),
    startDate: faker.date.past().toISOString().substring(0, 10),
  }));

  localStorage.setItem("hasInitializedData", "true");

  return fakeData;
}

export const useEmployeeStore = create<EmployeeStore>()(
  devtools(
    persist(
      (set) => ({
        employeeDataArray: shouldInitializeData ? generateFakeData() : [],
        addEmployeeData: (data) =>
          set((state) => ({
            employeeDataArray: [...state.employeeDataArray, data],
          })),
      }),
      {
        name: "employeeDataStorage",
      },
    ),
  ),
);

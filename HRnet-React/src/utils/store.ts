import { create } from "zustand";
import { EmployeeStore } from "../types/interfaces";
import { devtools, persist } from "zustand/middleware";

export const useEmployeeStore = create<EmployeeStore>()(
  devtools(
    persist(
      (set) => ({
        employeeDataArray: [],
        addEmployeeData: (data) =>
          set((state) => ({
            employeeDataArray: [...state.employeeDataArray, data],
          })),
      }),
      {
        name: "employee-storage",
      },
    ),
  ),
);

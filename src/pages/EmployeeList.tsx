import { useState } from "react";
import { useEmployeeStore } from "../utils/store";
import { Box, useMediaQuery } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  gridClasses,
} from "@mui/x-data-grid";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Creates and renders the EmployeeList component.
 *
 * @return {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList(): JSX.Element {
  const { employeeDataArray } = useEmployeeStore();

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  // Define a breakpoint for mobile
  /* c8 ignore next 1 */
  const isMobile = useMediaQuery("(max-width:639px)");

  // Define the columns based on EmployeeData interface
  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      sortable: true,
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      sortable: true,
      width: 150,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      sortable: true,
      width: 150,
    },
    {
      field: "street",
      headerName: "Street",
      sortable: true,
      width: 250,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      sortable: true,
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      sortable: true,
      width: 150,
    },
    {
      field: "state",
      headerName: "State",
      sortable: true,
      width: 150,
    },
    {
      field: "department",
      headerName: "Department",
      sortable: true,
      width: 200,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      sortable: true,
      width: 150,
    },
  ];

  return (
    <div>
      <Header />
      <section className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center gap-y-16 text-neutral-900">
        <h1 className="mt-4 text-3xl text-gray-700 lg:text-2xl md:text-xl sm:hidden">
          Current Employees
        </h1>
        <Box className="xl:w-full xl:max-w-full">
          <DataGrid
            sx={{
              /* c8 ignore next 1 */
              fontSize: isMobile ? "0.9rem" : "1rem",
              padding: "1em",
              [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
                {
                  outline: "none",
                },
              [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                {
                  outline: "none",
                },
              /* c8 ignore next 1 */
              border: isMobile ? "none" : "1px solid #e0e0e0",
            }}
            density="comfortable"
            rows={employeeDataArray}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 25]}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                  quickFilterExcludeHiddenColumns: true,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      </section>
      <Footer />
    </div>
  );
}

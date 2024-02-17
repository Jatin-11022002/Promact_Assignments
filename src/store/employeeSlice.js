import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  records: [
    {
      id: "fjhE22qbzjXvGkdLQWHCS",
      fullName: "raj",
      birthdate: "2024-02-12",
      department: "cs",
      experience: "2",
    },
    {
      id: "4DTnkbHutg7uaIqj-NuHO",
      fullName: "a",
      birthdate: "2024-02-05",
      department: "dc",
      experience: "2",
    },
    {
      id: "GnNG85lil9ls1jUxcF4CH",
      fullName: "b",
      birthdate: "2024-02-06",
      department: "df",
      experience: "2",
    },
    {
      id: "KzAL7YWxHiFRb_9f_pXIC",
      fullName: "d",
      birthdate: "2024-02-20",
      department: "we",
      experience: "2",
    },
    {
      id: "sW0txx_T1K4Irthyp6Xxy",
      fullName: "df",
      birthdate: "2024-02-13",
      department: "ty",
      experience: "6",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
    {
      id: "BpS0AwTcWYN8SlJbKRXJb",
      fullName: "cv",
      birthdate: "2024-02-15",
      department: "df",
      experience: "3",
    },
  ],
};

const employeeSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const { fullName, birthdate, department, experience } = action.payload;
      const employeeRecord = {
        id: nanoid(),
        fullName,
        birthdate,
        department,
        experience,
      };
      state.records.push(employeeRecord);
      console.log(state.records, "addemp");
    },

    updateEmployee: (state, action) => {
      console.log("updateemp");
      const {
        employeeId: id,
        fullName,
        birthdate,
        department,
        experience,
      } = action.payload;
      const updatedRecords = state.records.map((employee) => {
        if (employee.id === id) {
          return { ...employee, fullName, birthdate, department, experience };
        } else {
          return employee;
        }
      });
      state.records = updatedRecords;
      console.log(updatedRecords);
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

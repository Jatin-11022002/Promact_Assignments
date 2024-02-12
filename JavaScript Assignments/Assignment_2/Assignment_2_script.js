// Employee class to represent individual employees
class Employee {
  constructor(name, address, employeeId, designation) {
    this.name = name; // Name of the employee
    this.address = address; // Address of the employee
    this.employeeId = employeeId; // Unique ID of the employee
    this.designation = designation; // Job designation of the employee
  }
}

let employees = []; // Array to store all employees
let editIndex = -1; // Index of the employee being edited, initially set to -1

// Function to open the add employee modal
function openAddModal() {
  document.getElementById("addModal").style.display = "block"; // Display add modal
}

// Function to close the add employee modal
function closeAddModal() {
  document.getElementById("addModal").style.display = "none"; // Hide add modal
}

// Function to open the edit employee modal and populate fields with employee data
function openEditModal(index) {
  editIndex = index; // Set editIndex to the index of the employee being edited
  const employee = employees[index]; // Get the employee object from the array
  // Populate form fields with employee data
  document.getElementById("editName").value = employee.name;
  document.getElementById("editAddress").value = employee.address;
  document.getElementById("editEmployeeId").value = employee.employeeId;
  document.getElementById("editDesignation").value = employee.designation;
  document.getElementById("editModal").style.display = "block"; // Display edit modal
}

// Function to close the edit employee modal
function closeEditModal() {
  editIndex = -1; // Reset editIndex
  document.getElementById("editModal").style.display = "none"; // Hide edit modal
}

// Function to add a new employee
function addEmployee() {
  const name = document.getElementById("name").value.trim(); // Get input value and trim whitespace
  const address = document.getElementById("address").value.trim();
  const employeeId = document.getElementById("employeeId").value.trim();
  const designation = document.getElementById("designation").value.trim();

  // Check if any field is empty
  if (
    name === "" ||
    address === "" ||
    employeeId === "" ||
    designation === ""
  ) {
    // Show error modal if any field is empty
    showErrorModal("Please fill out all fields.");
    return;
  }

  // Check if the employee ID already exists
  const idExists = employees.some(
    (employee) => employee.employeeId === employeeId
  );
  if (idExists) {
    showErrorModal("Employee ID already exists.");
    return;
  }

  // Create a new employee instance and add it to the employees array
  const employee = new Employee(name, address, employeeId, designation);
  employees.push(employee);
  displayEmployees(); // Update the displayed employee list
  closeAddModal(); // Close the add employee modal
  clearAddForm(); // Clear the add employee form fields
}

// Function to edit an existing employee
function editEmployee() {
  const name = document.getElementById("editName").value.trim(); // Get input value and trim whitespace
  const address = document.getElementById("editAddress").value.trim();
  const employeeId = document.getElementById("editEmployeeId").value.trim();
  const designation = document.getElementById("editDesignation").value.trim();

  // Check if any field is empty
  if (
    name === "" ||
    address === "" ||
    employeeId === "" ||
    designation === ""
  ) {
    // Show error modal if any field is empty
    showErrorModal("Please fill out all fields.");
    return;
  }

  // Update the employee data at the specified index
  const employee = employees[editIndex];
  employee.name = name;
  employee.address = address;
  employee.employeeId = employeeId;
  employee.designation = designation;

  displayEmployees(); // Update the displayed employee list
  closeEditModal(); // Close the edit employee modal
}

// Function to delete an employee from the list
function deleteEmployee(index) {
  employees.splice(index, 1); // Remove the employee at the specified index
  displayEmployees(); // Update the displayed employee list
}

// Function to display all employees in the table
function displayEmployees() {
  if (employees.length > 0) {
    document.getElementById("employeeTable").style.display = "table"; // Display the table
    document.getElementById("employeeTablePlaceholder").style.display = "none"; // Hide placeholder message
    const tableBody = document.getElementById("employeeList");
    tableBody.innerHTML = ""; // Clear existing table rows

    // Iterate over all employees and create rows for each
    employees.forEach((employee, index) => {
      const row = tableBody.insertRow(); // Insert a new row
      // Populate cells with employee data
      row.insertCell(0).innerText = employee.employeeId;
      row.insertCell(1).innerText = employee.name;
      row.insertCell(2).innerText = employee.designation;
      row.insertCell(3).innerText = employee.address;
      // Create action icons for edit and delete
      const actionsCell = row.insertCell(4);
      const editIcon = document.createElement("i");
      editIcon.className = "fas fa-edit edit-icon";
      editIcon.onclick = () => openEditModal(index); // Assign edit functionality
      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fas fa-trash-alt delete-icon";
      deleteIcon.onclick = () => deleteEmployee(index); // Assign delete functionality
      actionsCell.appendChild(editIcon);
      actionsCell.appendChild(deleteIcon);
    });
  } else {
    document.getElementById("employeeTable").style.display = "none"; // Hide the table
    document.getElementById("employeeTablePlaceholder").style.display = "block"; // Show placeholder message
  }
}

// Function to clear the add employee form fields
function clearAddForm() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("employeeId").value = "";
  document.getElementById("designation").value = "";
}

// Function to clear the edit employee form fields
function clearEditForm() {
  document.getElementById("editName").value = "";
  document.getElementById("editAddress").value = "";
  document.getElementById("editEmployeeId").value = "";
  document.getElementById("editDesignation").value = "";
}

// Close the add and edit modals when clicking outside of them
window.onclick = function (event) {
  const addModal = document.getElementById("addModal");
  const editModal = document.getElementById("editModal");
  if (event.target == addModal) {
    closeAddModal();
  }
  if (event.target == editModal) {
    closeEditModal();
  }
};

// Function to display error modal with given message
function showErrorModal(message) {
  const errorModal = document.getElementById("errorModal");
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message; // Set error message text
  errorModal.style.display = "block"; // Display error modal
}

// Function to close error modal
function closeErrorModal() {
  const errorModal = document.getElementById("errorModal");
  errorModal.style.display = "none"; // Hide error modal
}

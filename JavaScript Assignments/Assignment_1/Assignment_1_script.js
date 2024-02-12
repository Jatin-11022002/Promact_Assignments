// Function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

// Function to perform modulo operation
function modulo(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot mod by zero");
  }
  return num1 % num2;
}

// Function to calculate result based on user input
function calculate() {
  // Get input elements and result element
  var num1Input = document.getElementById("num1");
  var num2Input = document.getElementById("num2");
  var operator = document.getElementById("operator").value;
  var resultElement = document.getElementById("result");

  // Check if inputs are valid and operator is selected
  if (num1Input.validity.valid && num2Input.validity.valid && operator !== "") {
    // Parse input values to floats
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);

    try {
      var result;
      // Perform operation based on the selected operator
      switch (operator) {
        case "+":
          result = add(num1, num2);
          break;
        case "-":
          result = subtract(num1, num2);
          break;
        case "*":
          result = multiply(num1, num2);
          break;
        case "/":
          result = divide(num1, num2);
          break;
        case "%":
          result = modulo(num1, num2);
          break;
        default:
          throw new Error("Invalid operator");
      }
      // Display the result
      resultElement.value = result;
      resultElement.classList.remove("error");
    } catch (error) {
      // Display error message if any error occurs
      resultElement.value = "Error: " + error.message;
      resultElement.classList.add("error");
    }
  } else {
    // Display error message if inputs are invalid
    resultElement.value =
      "Error: Please fill in all fields and select an operator.";
    resultElement.classList.add("error");
  }
}

// Function to reset the calculator form
function resetCalculator() {
  // Reset form and result element
  document.getElementById("calculatorForm").reset();
  document.getElementById("result").value = "";
  document.getElementById("result").classList.remove("error");
}

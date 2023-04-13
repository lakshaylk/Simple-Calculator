// script.js
let result = document.getElementById("result");

// Function to append characters to the result input
function appendCharacter(character) {
  result.value += character;
}

// Function to calculate the result
function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

// Function to clear the result input
function clearResult() {
  result.value = "";
}

// Function to delete the last character in the result input
function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}

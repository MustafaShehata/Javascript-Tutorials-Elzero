// Select all text input fields and the submit button
const textInputs = document.querySelectorAll("[type='text']");
const submitBtn = document.querySelector(".btn");

// Set focus on the first input field when the window loads
window.onload = () => textInputs[0].focus();

// Function to check if all input fields are filled with 4 characters
const allFieldsFilled = () =>
  Array.from(textInputs).every((input) => input.value.length === 4);

// Add event listeners to each input field
textInputs.forEach((input, index) => {
  input.oninput = () => {
    // When an input field reaches 4 characters
    if (input.value.length === 4) {
      // Remove focus from the current field
      input.blur();
      // Move focus to the next input field if it exists
      if (index < textInputs.length - 1) {
        textInputs[index + 1].focus();
      } else if (allFieldsFilled()) {
        // Click the submit button if all fields are filled with 4 characters
        submitBtn.click();
      }
    }
  };
});

// Get the form element
const form = document.getElementById('basic_Form');
  
// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get the weight input value
  const weightInput = document.getElementById('inputDoctorName');
  const weight = weightInput.value;

  // Get the height input value
  const heightInput = document.getElementById('inputDepartmentName');
  const height = weightInput.value;

  var BMI = height - weight;
  // Perform any desired actions with the value
  console.log("Weight:", weight);
  console.log("Height:", height);
  console.log("BMI:", BMI);
  // Reset the form if needed
  form.reset();
});
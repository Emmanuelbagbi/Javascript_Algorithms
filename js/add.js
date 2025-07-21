function addNumbers() {
  const firstNumber = parseFloat(document.getElementById("num1").value);
  const secondNumber = parseFloat(document.getElementById("num2").value);

  if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert("Please enter valid numbers");
    return;
  }
  const result = firstNumber + secondNumber;

  document.getElementById("result").textContent = "Ans: "+result;
}

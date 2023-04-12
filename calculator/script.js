let result = document.getElementById("result");

function updateResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;
  if (expression) {
    result.value = eval(expression);
  }
}

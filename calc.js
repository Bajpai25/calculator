let history = '';

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function operation(operator) {
  document.getElementById('display').value += operator;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function clearEntry() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
  let displayValue = document.getElementById('display').value;
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    history += displayValue + ' = ' + result + '\n';
    document.getElementById('History').value = history;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}


  
  
  
  

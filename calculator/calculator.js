function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function appendFunction(func) {
    const display = document.getElementById('display');
    display.value += func;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch {
      display.value = 'Error';
    }
  }
  
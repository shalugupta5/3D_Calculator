document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.innerText === '=') {
          try {
            // Replace 'x' with '*' for eval()
            const expression = display.value.replace(/x/g, '*');
            const result = eval(expression);
            display.value = result;
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          display.value += button.innerText;
        }
      });
    });

    clearButton.addEventListener('click', () => {
      display.value = '';
    });

    equalButton.addEventListener('click', () => {
      try {
        // Replace 'x' with '*' for eval()
        const expression = display.value.replace(/x/g, '*');
        const result = eval(expression);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    });
  });
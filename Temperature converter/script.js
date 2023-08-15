
    function convertTemperature() {
      var temperature = document.getElementById('temperature').value;
      var unit = document.getElementById('unit').value;
      var resultElement = document.getElementById('result');

      if (temperature === '') {
        resultElement.innerHTML = 'Please enter a temperature.';
        return;
      }

      if (unit === 'celsius') {
        var fahrenheit = (temperature * 9/5) + 32;
        resultElement.innerHTML = temperature + '°C is ' + fahrenheit + '°F.';
      } else {
        var celsius = (temperature - 32) * 5/9;
        resultElement.innerHTML = temperature + '°F is ' + celsius + '°C.';
      }
    }

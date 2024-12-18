document.getElementById("button2").addEventListener("click", function() {
  const userInput = document.getElementById("textfield2").value;

  // Crear el objeto JSON
  const data = {
    input: userInput
  };

  // Realizar la solicitud POST al servidor Flask
  fetch('/api/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }
    return response.json();
  })
  .then(data => {
    // Actualizar el contenido del label con el resultado del servidor
    const resultLabel = document.getElementById("resultLabel");
    resultLabel.innerText = 'Script,js: ' + data.result;
  })
  .catch(error => {
    console.error('Error:', error);
    const resultLabel = document.getElementById("resultLabel");
    resultLabel.innerText = 'Hubo un error al enviar los datos.';
  });
});






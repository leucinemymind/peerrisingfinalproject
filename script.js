function generateRandomHexCode() {
    const letters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexCode;
  }
  
  function updateColorSquare() {
    const hexCode = generateRandomHexCode();
    const colorSquare = document.getElementById('colorSquare');
    colorSquare.style.backgroundColor = hexCode;
  
    const hexCodeDisplay = document.getElementById('hexCodeDisplay');
    hexCodeDisplay.textContent = hexCode;
  }
  
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', updateColorSquare);
  
  // Generate a random hex code and display it on page load
  updateColorSquare();
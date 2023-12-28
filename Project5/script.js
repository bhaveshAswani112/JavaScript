function generatePalette() {
    const selectedColor = document.querySelector('#colorPicker').value;
    const rgb = hexToRgb(selectedColor);
    const palette = generateShades(rgb);
    displayPalette(palette);
  }
  
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  function generateShades(rgb) {
    const shades = [];
  
    for (let i = 1; i <= 3; i++) {
      shades.push(`rgb(${Math.round(rgb.r * i / 4)}, ${Math.round(rgb.g * i / 4)}, ${Math.round(rgb.b * i / 4)})`);
    }
  
    shades.push(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`); // Original color
    for (let i = 1; i <= 3; i++) {
      shades.push(`rgb(${Math.round(rgb.r + (255 - rgb.r) * i / 4)}, ${Math.round(rgb.g + (255 - rgb.g) * i / 4)}, ${Math.round(rgb.b + (255 - rgb.b) * i / 4)})`);
    }
  
    return shades;
  }
  
  function displayPalette(palette) {
    const colorPalette = document.querySelector('#colorPalette');
    colorPalette.innerHTML = '';
    palette.forEach((shade) => {
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = shade;
      colorPalette.appendChild(colorBox);
    });
  }
  
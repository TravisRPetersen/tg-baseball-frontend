// place files you want to import through the `$lib` alias in this folder.
function getColor(value: number): string {
  // Ensure the value is clamped between 0 and 100
  const floor = 50;
  value = Math.min(100, Math.max(floor, value));

  // const t = Math.log10(value) / Math.log10(100);
  const t = (value - floor) / floor;

  // Define the start (yellow) and end (green) colors in RGB
  const startColor = { r: 255, g: 255, b: 97 }; // Yellow
  const endColor = { r: 10, g: 80, b: 6 }; // Green

  const r = Math.round(startColor.r + (endColor.r - startColor.r) * t);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * t);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * t);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  // Return the interpolated color as an RGB string
  return rgb;
}

export default getColor;

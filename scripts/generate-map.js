const DottedMap = require('dotted-map').default;
const fs = require('fs');
const path = require('path');

// Generate at 4x resolution for crisp dots
// height: 200 controls dot density (keep same)
// radius: 0.88 is 4x the original 0.22 for sharp rendering
const map = new DottedMap({ height: 200, grid: "diagonal" });
const svgString = map.getSVG({
  radius: 0.88,
  color: "#00000020",
  shape: "circle",
  backgroundColor: "white",
});

const outputPath = path.join(__dirname, '..', 'public', 'world-map.svg');
fs.writeFileSync(outputPath, svgString);

console.log('✓ World map SVG generated at:', outputPath);
console.log('✓ SVG is 4x resolution for crisp rendering');
console.log('Now run: npx sharp-cli resize 3200 --input public/world-map.svg --output public/world-map.png');

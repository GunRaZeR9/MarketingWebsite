const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

function convertDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      convertDirectory(filePath);
    } else if (file.toLowerCase().endsWith('.png')) {
      const outputPath = filePath.replace(/\.png$/i, '.webp');

      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(info => {
          const originalSize = stat.size;
          const newSize = info.size;
          const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
          console.log(`✓ ${file} → ${path.basename(outputPath)} (saved ${saved}%)`);
        })
        .catch(err => console.error(`✗ Error converting ${file}:`, err));
    }
  });
}

console.log('Converting PNG images to WebP...\n');
convertDirectory(imagesDir);
console.log('\nConversion complete!');

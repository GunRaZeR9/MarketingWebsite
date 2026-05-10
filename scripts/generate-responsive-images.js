const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { width: 412, suffix: '-412w' },
  { width: 820, suffix: '-820w' }
];

const images = [
  'public/images/background/bg1.webp'
];

async function generateResponsiveImages() {
  for (const imagePath of images) {
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠️  Image not found: ${imagePath}`);
      continue;
    }

    const ext = path.extname(imagePath);
    const dir = path.dirname(imagePath);
    const nameWithoutExt = path.basename(imagePath, ext);

    console.log(`\n📸 Processing: ${imagePath}`);

    for (const size of sizes) {
      const outputPath = path.join(dir, `${nameWithoutExt}${size.suffix}${ext}`);

      try {
        await sharp(imagePath)
          .resize(size.width, null, { withoutEnlargement: true })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`✅ ${size.width}w: ${outputPath} (${(stats.size / 1024).toFixed(1)}KB)`);
      } catch (error) {
        console.error(`❌ Error resizing to ${size.width}w:`, error.message);
      }
    }
  }

  console.log('\n✓ Responsive image generation complete');
}

generateResponsiveImages();

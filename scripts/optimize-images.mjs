import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const logosDir = 'public/images/logos';
const bgDir = 'public/images/background';

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  try {
    // 1. Generate logo at 96x96 (for header at 75x75, footer at 48x48)
    console.log('Generating inside_growth_logo_96.webp (96x96)...');
    await sharp(`${logosDir}/inside_growth_logo_512p.png`)
      .resize(96, 96, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(`${logosDir}/inside_growth_logo_96.webp`);

    const stats96 = fs.statSync(`${logosDir}/inside_growth_logo_96.webp`);
    console.log(`✓ Created: inside_growth_logo_96.webp (${(stats96.size / 1024).toFixed(2)} KiB)\n`);

    // 2. Generate logo at 192x192 (for retina/2x display)
    console.log('Generating inside_growth_logo_192.webp (192x192)...');
    await sharp(`${logosDir}/inside_growth_logo_512p.png`)
      .resize(192, 192, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(`${logosDir}/inside_growth_logo_192.webp`);

    const stats192 = fs.statSync(`${logosDir}/inside_growth_logo_192.webp`);
    console.log(`✓ Created: inside_growth_logo_192.webp (${(stats192.size / 1024).toFixed(2)} KiB)\n`);

    // 3. Recompress bg1.webp with maximum compression
    console.log('Recompressing bg1.webp (quality 35, effort 6)...');
    const inputStats = fs.statSync(`${bgDir}/bg1.webp`);
    const inputSize = inputStats.size / 1024;

    const outputFile = `${bgDir}/bg1-compressed.webp`;
    await sharp(`${bgDir}/bg1.webp`)
      .webp({ quality: 35, effort: 6 })
      .toFile(outputFile);

    const outputStats = fs.statSync(outputFile);
    const outputSize = outputStats.size / 1024;
    const savings = inputSize - outputSize;
    console.log(`✓ Created: bg1-compressed.webp`);
    console.log(`  Original: ${inputSize.toFixed(2)} KiB`);
    console.log(`  Optimized: ${outputSize.toFixed(2)} KiB`);
    console.log(`  Savings: ${savings.toFixed(2)} KiB`);
    console.log(`  (Copy this file over public/images/background/bg1.webp)\n`);

    console.log('✓ Image optimization complete!');
    console.log('\nSummary:');
    console.log(`  - inside_growth_logo_96.webp: ${(stats96.size / 1024).toFixed(2)} KiB (from 1024x1024 PNG ~1,434 KiB)`);
    console.log(`  - inside_growth_logo_192.webp: ${(stats192.size / 1024).toFixed(2)} KiB (for 2x retina)`);
    console.log(`  - bg1-compressed.webp: ${outputSize.toFixed(2)} KiB (from ${inputSize.toFixed(2)} KiB, saved ${savings.toFixed(2)} KiB)`);
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

optimizeImages();

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const assetsDir = path.resolve('src/assets');
const supportedExtensions = new Set(['.jpeg', '.jpg', '.png', '.JPG']);
const thresholdBytes = 500 * 1024;

const formatBytes = (bytes) => {
  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }
  return `${(kb / 1024).toFixed(2)} MB`;
};

if (!fs.existsSync(assetsDir)) {
  console.error(`Assets directory not found: ${assetsDir}`);
  process.exit(1);
}

const files = fs
  .readdirSync(assetsDir)
  .filter((file) => supportedExtensions.has(path.extname(file)));

if (files.length === 0) {
  console.log('No .jpeg/.jpg/.png/.JPG files found in src/assets/.');
  process.exit(0);
}

let totalBytes = 0;
const largeFiles = [];

console.log(`Scanning ${files.length} image files in src/assets/...\n`);

for (const file of files) {
  const fullPath = path.join(assetsDir, file);
  const stats = fs.statSync(fullPath);
  totalBytes += stats.size;

  if (stats.size > thresholdBytes) {
    largeFiles.push({ file, size: stats.size });
  }

  console.log(`${file} - ${formatBytes(stats.size)}`);
}

console.log('\n--- Summary ---');
console.log(`Total images scanned: ${files.length}`);
console.log(`Total size: ${formatBytes(totalBytes)}`);
console.log(`Files over 500 KB: ${largeFiles.length}`);

if (largeFiles.length > 0) {
  console.log('\nRecommended for optimization (>500 KB):');
  for (const item of largeFiles.sort((a, b) => b.size - a.size)) {
    console.log(`- ${item.file} (${formatBytes(item.size)})`);
  }
} else {
  console.log('\nNo files exceed 500 KB. Great job.');
}

// Keep child_process usage available for future optimization pipeline steps.
execSync('echo "Image diagnostics complete."', { stdio: 'ignore' });

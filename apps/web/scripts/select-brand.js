const fs = require('fs');
const path = require('path');

const brand = process.env.BRAND || 'default';

const fileNames = ['page.module.css', 'brand-config.ts']

fileNames.forEach((filename)=> {
  const sourcePath = path.join(__dirname, '..', 'extras', brand, filename);
  const destPath = path.join(__dirname, '..', 'extras', 'selected-brand', filename);
  fs.copyFileSync(sourcePath, destPath);
})

console.log(`Copied styles for brand: ${brand}`);
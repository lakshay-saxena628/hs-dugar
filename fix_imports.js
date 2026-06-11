const fs = require('fs');

const categoriesFile = '/Users/lakshaysaxena/Desktop/hs-dugar/src/utils/categories.ts';
let content = fs.readFileSync(categoriesFile, 'utf8');

const importMap = new Map();
let importCounter = 1;
let importsText = '';

// Find all unique /assets/ URLs
const matches = content.match(/\/assets\/([^']+)/g);
if (matches) {
  const uniqueAssets = [...new Set(matches)];
  uniqueAssets.forEach(assetPath => {
    const filename = assetPath.replace('/assets/', '');
    const importName = `img_${importCounter++}`;
    importMap.set(assetPath, importName);
    importsText += `import ${importName} from '@/assets/${filename}';\n`;
  });
}

// Replace the string with the import variable .src
content = content.replace(/imagePlaceholder:\s*'(\/assets\/[^']+)'/g, (match, assetPath) => {
  const importName = importMap.get(assetPath);
  return `imagePlaceholder: ${importName}.src`;
});

// Add imports after the lucide-react imports
content = content.replace(/(import React from 'react';\n)/, `$1\n${importsText}`);

fs.writeFileSync(categoriesFile, content, 'utf8');
console.log('Done adding imports.');

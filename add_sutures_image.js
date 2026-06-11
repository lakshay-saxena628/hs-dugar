const fs = require('fs');

const categoriesFile = '/Users/lakshaysaxena/Desktop/hs-dugar/src/utils/categories.ts';
let content = fs.readFileSync(categoriesFile, 'utf8');

// Add new import
const newImport = `import img_sutures from '@/assets/sutures.png';\n`;
content = content.replace(/(import React from 'react';\n)/, `$1${newImport}`);

// Replace specific placeholder with the new import
// Sutures (name: 'Sutures')
content = content.replace(
  /name:\s*'Sutures',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g,
  "name: 'Sutures',\n        description: '$1',\n        imagePlaceholder: img_sutures.src"
);

fs.writeFileSync(categoriesFile, content, 'utf8');
console.log('Added Sutures import to categories.ts');

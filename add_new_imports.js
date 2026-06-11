const fs = require('fs');

const categoriesFile = '/Users/lakshaysaxena/Desktop/hs-dugar/src/utils/categories.ts';
let content = fs.readFileSync(categoriesFile, 'utf8');

// Add new imports
const newImports = `
import img_suction from '@/assets/suction_catheter.jpeg';
import img_luer_lock from '@/assets/luer_lock.png';
import img_arterial_cath from '@/assets/arterial_catheter.png';
import img_sodium_heparin from '@/assets/sodium_heparin_tube.png';
`;
content = content.replace(/(import React from 'react';)/, `$1\n${newImports}`);

// Replace specific placeholders with the new imports
// Suction Catheters (name: 'Suction Catheters')
content = content.replace(
  /name:\s*'Suction Catheters',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g,
  "name: 'Suction Catheters',\n        description: '$1',\n        imagePlaceholder: img_suction.src"
);

// Luer Lock (name: 'Luer Lock')
content = content.replace(
  /name:\s*'Luer Lock',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g,
  "name: 'Luer Lock',\n        description: '$1',\n        imagePlaceholder: img_luer_lock.src"
);

// Arterial Catheter (name: 'Arterial Catheter')
content = content.replace(
  /name:\s*'Arterial Catheter',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g,
  "name: 'Arterial Catheter',\n        description: '$1',\n        imagePlaceholder: img_arterial_cath.src"
);

// Vacutainer - Sodium Heparin (Green) (name: 'Vacutainer - Sodium Heparin (Green)')
content = content.replace(
  /name:\s*'Vacutainer - Sodium Heparin \(Green\)',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g,
  "name: 'Vacutainer - Sodium Heparin (Green)',\n        description: '$1',\n        imagePlaceholder: img_sodium_heparin.src"
);

fs.writeFileSync(categoriesFile, content, 'utf8');
console.log('Added new imports to categories.ts');

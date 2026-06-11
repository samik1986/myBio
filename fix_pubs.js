const fs = require('fs');

const pubDataPath = 'src/data/publicationsData.js';
const pubData = fs.readFileSync(pubDataPath, 'utf-8');

// We have lines like: `image: img_11,` but `img_11` is not defined in imports.
// We should replace undefined `image: img_X,` with a placeholder `image: null,` or defined generic ones,
// OR better yet, let's just make all images use string filenames or require imports correctly.

// Let's parse all `import img_X from ...;`
const importRegex = /import (img_\d+) from '.*?';/g;
let match;
const definedImages = new Set();
while ((match = importRegex.exec(pubData)) !== null) {
  definedImages.add(match[1]);
}

let fixedData = pubData;
// replace `image: img_X,` with `image: null,` if img_X is not in definedImages
const imagePropRegex = /image: (img_\d+),/g;
fixedData = fixedData.replace(imagePropRegex, (match, imgVar) => {
  if (definedImages.has(imgVar)) {
    return `image: ${imgVar},`;
  } else {
    // We will just use img_0 as a fallback or null. Let's use null
    return `image: null,`;
  }
});

// Since the components might crash if image is null and they try to render it without checking,
// let's use `img_0` or one of the defined generic ones. Or better, just define generic placeholder `import project_brain from '../assets/project_brain.png'`
const genericImport = `import generic_img from '../assets/project_brain.png';\n`;
if (!fixedData.includes('generic_img')) {
    fixedData = genericImport + fixedData;
}

fixedData = fixedData.replace(imagePropRegex, (match, imgVar) => {
    if (definedImages.has(imgVar)) {
        return `image: ${imgVar},`;
    } else {
        return `image: generic_img,`;
    }
});

fs.writeFileSync(pubDataPath, fixedData);
console.log('Fixed missing image references!');

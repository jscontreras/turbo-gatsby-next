const fs = require('fs');
const path = require('path');

let filesF =null;

const fileExtensions = ['.js', '.json'];

export function GET(_request) {
    if (!filesF) {
      filesF = listFilesSync();
    }
    return new Response(JSON.stringify(filesF), {
      headers: {
        'Content-Type': 'application/json',
        'Vercel-CDN-Cache-Control':'max-age=3600',
        'CDN-Cache-Control':'max-age=60',
        'Cache-Control':'max - age=10',
      },
      status: 200 // HTTP status code for OK
    });
}

/**
 * Print Files from public folder
 * @param {*} dirPath
 * @param {*} arrayOfFiles
 * @returns
 */
function getAllFilesSync(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  files.forEach(file => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFilesSync(path.join(dirPath, file.name), arrayOfFiles);
    } else {
      if (fileExtensions.some(ext => {
        return file.name.endsWith(ext);
      })) {
        const fPath = path.join(dirPath, file.name).split('/public').pop();
        arrayOfFiles.push(fPath);
      }
    }
  });

  return arrayOfFiles;
}

// Usage example
function listFilesSync() {
  try {
    const dirPath = path.join(__dirname, '../public'); // Replace with your directory path
    const files = getAllFilesSync(dirPath);
    return files;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}


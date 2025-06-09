 const fs = require('node:fs');
const unzipper = require('unzipper');
const path = require('node:path');

async function unzipFile(zipFilePath, extractPath) {
  try {
    await fs.createReadStream(zipFilePath)
      .pipe(unzipper.Extract({ path: extractPath }))
      .promise();
    console.log('Successfully extracted');
  } catch (err) {
    console.error('Extraction failed:', err);
  }
}

const zipFilePath = path.join(__dirname, 'your-zip-file.zip'); // Replace with the actual path to your zip file
const extractPath = path.join(__dirname, 'extracted');

unzipFile(zipFilePath, extractPath);
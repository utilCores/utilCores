const path = require('path');
const package = require('../../package.json');

const ROOT_DIR = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

const PATH_TO_INDEX = path.resolve(ROOT_DIR, 'app', 'index.html');

module.exports = {
  ROOT_DIR,
  PUBLIC_DIR,
  PATH_TO_INDEX,
};
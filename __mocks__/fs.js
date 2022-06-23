const fs = jest.createMockFromModule('fs');
let directoryTree = {};

const setDirectoryTree = ( _directoryTree = {} ) => {
  directoryTree = _directoryTree;
}

const isObject = (value) => {
  return !!(value && typeof value === "object" && !Array.isArray(value));
};

function readdirSync(directoryPath) {
  let tree = {...directoryTree};
  const arrayPath = directoryPath.split('/');
  let directory = null;
  for (let i = 0; i < arrayPath.length && arrayPath[i] != '' ; i++) {
    directory = arrayPath[i];
    tree = tree[directory];
  }
  return (isObject(tree)) ? Object.keys(tree) : tree;
}

function existsSync(filePath) {
  const arrayPath = filePath.split('/').slice(0, -1);
  const file = filePath.split('/').slice(-1)[0];
  const files = readdirSync(arrayPath.join("/"));
  return files.includes(file);
}

fs.__setDirectoryTree = setDirectoryTree;
fs.readdirSync = readdirSync;
fs.existsSync = existsSync;

module.exports = fs;
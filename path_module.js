const path = require("path");

console.log(__dirname);
console.log(__filename);

// School

const filePath = path.join("folder", "students", "data.txt");

const pareseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({ pareseData, resolvedPath, extname, basename, dirname });

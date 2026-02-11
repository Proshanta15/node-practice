const fs = require("fs");
const path = require("path");

// const fileName = "text.txt";

// const writeFile = fs.writeFileSync(fileName, "Hello World", "utf-8");

// console.log(writeFile);

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

// const readFile = fs.readFileSync(filePath, "utf-8");

// console.log(readFile);

// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nThis is hello world two",
//   "utf-8",
// );
// console.log(appendFile);

const fileDelete = fs.unlinkSync(filePath);
console.log(fileDelete);

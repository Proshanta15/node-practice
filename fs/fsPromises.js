const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";

const filePath = path.join(__dirname, fileName);

// const file = __dirname;

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const fileDir = __dirname;

// fs.promises
//   .readdir(fileDir)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fs.promises
//   .writeFile(filePath, "This is initial data", "utf-8")
//   .then(console.log("File created Successfully"))
//   .catch((err) => console.error(err));

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Error reading file", err));

// fs.promises
//   .appendFile(filePath, "\nThis is update data", "utf-8")
//   .then(console.log("File updated"))
//   .catch((err) => console.error(err));

// fs.promises
//   .unlink(filePath)
//   .then(console.log("File Deleted"))
//   .catch((err) => console.error(err));

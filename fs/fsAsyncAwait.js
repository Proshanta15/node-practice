const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;

// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(filePath1);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();

const writeFileExample = async () => {
  try {
    await fs.writeFile(filePath, "This is the data", "utf-8");
    console.log("File Created successfully");
  } catch (error) {
    console.error(error);
  }
};
writeFileExample();

// const readFileExample = async () => {
//   try {
//     const res = await fs.readFile(filePath, "utf-8");
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFileExample();

// const appendFileExample = async () => {
//   try {
//     await fs.appendFile(filePath, "\nThis is updated data", "utf-8");
//     console.log("data updated successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// appendFileExample();

// const unlinkExample = async () => {
//   try {
//     fs.unlink(filePath);
//     console.log("deleted");
//   } catch (error) {
//     console.error(error);
//   }
// };
// unlinkExample();

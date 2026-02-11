import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter Your file name: ", (fileName) => {
    rl.question("Enter the content for your file: ", (content) => {
      fs.writeFile(`${fileName}.txt`, content, (err) => {
        if (err) {
          console.error(`Error writing the file`);
        } else {
          console.log(`File "${fileName}.txt" created successfully`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();

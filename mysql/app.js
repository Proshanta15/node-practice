import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pro@1997",
  database: "mysql_db",
});

console.log("MySQL Connected Successfully");

// await db.execute(`Create database mysql_db`);

// console.log(await db.execute("Show databases"));

// await db.execute(`
//     CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     )
//     `);

//! Insert
// await db.execute(`
//     insert into users(username, email) values('proshanta','proshanta@gmail.com')
//     `);

//* Using Prepared Statements (Best Practice)
// await db.execute(`insert into users(username, email) values(?,?)`, [
//   "roy",
//   "roy@gmail.com",
// ]);

// const values = [
//   ["proshanta1", "proshanta1@gmail.com"],
//   ["proshanta2", "proshanta2@gmail.com"],
//   ["proshanta3", "proshanta3@gmail.com"],
//   ["proshanta4", "proshanta4@gmail.com"],
//   ["proshanta5", "proshanta5@gmail.com"],
// ];

// await db.query("insert into users(username, email) values ?", [values]);

//! Read Data
const [rows] = await db.execute(`select * from users`);

// const [rows] = await db.execute(` select * from users where username="roy" `);
console.log(rows);

// try {
//   const [rows] = await db.execute(
//     "update users set username='roybd' where email='roy@gmail.com' ",
//   );
//   console.log("All users:", rows);
// } catch (error) {
//   console.error(error);
// }

// Delete

// try {
//   const [rows] = await db.execute(
//     "DELETE FROM users where email='roy@gmail.com' ",
//   );
// } catch (error) {
//   console.error(error);
// }

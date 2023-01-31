import { createPool } from "mysql2/promise";

export const pool = createPool({
  //host: "localhost",
  host: "sql9.freemysqlhosting.net",
  //user: "root",
  user: "sql9594540",
  //password: "m1a2t3e4u5s6",
  password: "WUjvb4ZfGx",
  port: 3306,
  //database: "customersdb",
  database: "sql9594540"
});

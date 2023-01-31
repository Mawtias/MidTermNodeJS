import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "m1a2t3e4u5s6",
  port: 3306,
  database: "customersdb",
});

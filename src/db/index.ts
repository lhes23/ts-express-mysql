import { createConnection } from "mysql";

const con = createConnection({
  host: "localhost",
  user: "nodejs_db",
  password: "",
  database: "nodejs_db",
});

con.connect((err) =>
  err
    ? console.log("Error connecting to Database")
    : console.log("Connected to Database!")
);

export default con;

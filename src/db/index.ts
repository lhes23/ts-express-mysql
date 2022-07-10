import { createConnection } from "mysql";

const connect = createConnection({
  host: "localhost",
  user: "nodejs_db",
  password: "",
  database: "nodejs_db",
});

connect.connect((err) =>
  err
    ? console.log("Error connecting to Database")
    : console.log("Connected to Database!")
);

export default connect;

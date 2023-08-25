
const errorHandler = require("errorhandler");
const connectDb= require("./config/dbConnection");
const express = require("express");
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const port = process.env.PORT || 50000;

app.use(express.json());
app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is working on port ${port}`);
});

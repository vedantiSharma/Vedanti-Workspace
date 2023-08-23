
const errorHandler = require("errorhandler");
const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is working on port ${port}`);
});

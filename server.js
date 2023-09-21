const express = require("express");
const path = require("path");

const app = express();

const mainRoutes = require('./routers/index')

app.set("view engine", "ejs");
app.use(express.static("public"));


const PORT = process.env.PORT || 3000;


app.use(mainRoutes);
app.listen(PORT, () => {
  console.log("Server created successfully");
});

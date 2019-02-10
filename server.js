const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/burgers_controllers.js");

app.use(router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
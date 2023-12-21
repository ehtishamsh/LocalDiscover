const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   if (req.path === "/users/ehtisham") {
//     next();
//   } else {
//     res.redirect("/users");
//   }
// });
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/users", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

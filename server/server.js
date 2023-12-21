const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   if (req.path === "/users/ehtisham") {
//     next();
//   } else {
//     res.redirect("/users");
//   }
// });

app.use((req, res, next) => {
  res.status(400).json({
    status: "fail",
  });
});
app.get("/restaurants", function (req, res) {
  res.status(200).send({
    name: "Ehtisham",
    location: "Lahore",
  });
});
app.get("/profile", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});
app.get("/users", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

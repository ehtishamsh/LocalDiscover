require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT;
const db = require("./db/index.js");

// app.use((req, res, next) => {
//   if (req.path === "/users/ehtisham") {
//     next();
//   } else {
//     res.redirect("/users");
//   }
// });
app.use(express.json());

app.get("/restaurants", async function (req, res) {
  const result = await db.query("select * from restaurants");
  console.log(result);
  res.status(200).send({
    name: "Ehtisham",
    location: "Lahore",
  });
});
app.get("/restaurants/:id", function (req, res) {
  res.status(201).send({
    name: "Ehtisham",
    location: "Lahore",
  });
});
app.post("/restaurants", (req, res) => {
  res.status(201).send({
    name: "Ehtisham",
    location: "Lahore",
  });
});
app.put("/restaurants/:id", (req, res) => {
  res.status(201).send({
    name: "Ehtisham",
    location: "Lahore",
  });
});
app.delete("/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Sucesss",
  });
});
app.listen(port || 3000, () => {
  console.log(`listening on port ${port}`);
});

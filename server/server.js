require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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
app.use(cors());
//GET ALL
app.get("/api/restaurants", async function (req, res) {
  try {
    const result = await db.query("select * from restaurants");
    res.status(200).json({
      status: "Success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (err) {
    console.log("ERROR");
  }
});
//GET 1
app.get("/api/restaurants/:id", async function (req, res) {
  try {
    const result = await db.query("select * from restaurants where id= $1", [
      req.params.id,
    ]);
    console.log(result);
    res.status(201).json({
      status: "Success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log("ERROR");
  }
});

//INSERT DATA
app.post("/api/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query(
      "insert into restaurants (restaurant_name, price, location) values ($1, $2, $3) returning *",
      [req.body.name, req.body.price, req.body.location]
    );
    console.log(result);
    res.status(201).json({
      status: "Success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
app.put("/api/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query(
      "UPDATE restaurants SET restaurant_name=$2, price=$3, location=$4 WHERE id=$1 RETURNING *",
      [req.params.id, req.body.name, req.body.price, req.body.location]
    );

    res.status(201).json({
      status: "Success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
app.delete("/api/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM restaurants WHERE id=$1 RETURNING *",
      [req.params.id]
    );

    res.status(201).json({
      status: "Success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port || 3000, () => {
  console.log(`listening on port ${port}`);
});

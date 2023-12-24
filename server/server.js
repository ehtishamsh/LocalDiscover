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
  try {
    const result = await db.query(
      "insert into restaurants (restaurant_name, price, location) values ($1, $2, $3) returning *",
      [req.body.name, req.body.price, req.body.location]
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
//Get reviews
app.get("/api/restaurants/rev/:id", (req, res) => {
  try {
    const dbQ = db.query("SELECT * FROM reviews WHERE restaurant_id= $1", [
      req.params.id,
    ]);
    res.status(201).json({
      status: "Success",
      data: dbQ,
    });
  } catch (error) {
    console.log(error);
  }
});
//Add review
app.post("/api/restaurants/rev/:id", async (req, res) => {
  try {
    const dbQ = await db.query(
      "INSERT INTO reviews (restaurant_id, userName, rating, comment, review_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.params.id,
        req.body.username,
        req.body.rating,
        req.body.comment,
        req.body.reviews_date,
      ]
    );
    res.status(201).json({
      status: "Success",
      NoOfreviews: dbQ.rows.length,
      data: dbQ.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port || 3000, () => {
  console.log(`listening on port ${port}`);
});

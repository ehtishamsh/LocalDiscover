require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//Get All restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      restaurants: ["Mcdonalds", "KFC"],
    },
  });
});
//Get restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

// Create a new restaurant

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req);
});

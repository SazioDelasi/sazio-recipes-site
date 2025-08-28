const express = require("express");
const cors = require("cors");
const foodRoutes = require("./routes/food-routes.js")


const app = express();
app.use(cors());
app.use(express.json());

app.use("/food", foodRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the Recipes API");
});

module.exports = app;

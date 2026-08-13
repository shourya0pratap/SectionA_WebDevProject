const express = require("express");
const games = require("./data/games");
const app = express();

app.get("/", (req, res) => {
  res.send("hi there !!!");
});

app.get("/games", (req, res) => {
  const { name } = req.query;
  let result = games;

  if (name) {
    result = result.filter((game) => game.name == name);
  }

  res.json(result);
});

// Get Game By ID
app.get("/games/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = games.find((game) => game.id === id);

  if (!item) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json(item);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

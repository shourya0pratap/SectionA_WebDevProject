const fs = require("fs");
const path = require("path");

const gameFilePath = path.join(__dirname, "../data/games.json");

const getAll = () => {
  const data = fs.readFileSync(gameFilePath, "utf-8");
  return JSON.parse(data);
};

const getById = (id) => {
  const data = fs.readFileSync(gameFilePath, "utf-8");
  const games = JSON.parse(data);
  return games.find((game) => game.id === id);
};

module.exports = { getAll, getById };

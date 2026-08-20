const gameModel = require("../model/gamesModel");

const getAllGames = (req, res) => {
  const games = gameModel.getAll();
  res.json(games);
};

const getGameById = (req, res) => {
  const id = parseInt(req.params.id);
  const game = gameModel.getById(id);
  if (game) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
};

module.exports = { getAllGames, getGameById };

const express = require("express");
const router = express.Router();
const gamesController = require('../controller/gamesController');

router.get('/', gamesController.getAllGames)
router.get('/:id', gamesController.getGameById)

module.exports = router;
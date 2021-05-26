const PlayerController = require('../controllers/player.controller');
const Player = require('../models/player.model');

module.exports = app => {
    app.get('/api/player', PlayerController.findAllPlayers);
    app.put('/api/player/:id', PlayerController.updateSinglePlayer);
    app.post('/api/player/create', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.findSinglePlayer);
    app.delete('/api/player/:id', PlayerController.deleteAnExistingPlayer);
}

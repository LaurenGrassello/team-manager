const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get('/api/message', TeamController.index);
    app.post('/api/player', TeamController.createPlayer);
    app.get('/api/player', TeamController.findAllPlayers);
    app.get('/api/player/:id', TeamController.findOnePlayer);
    app.put('/api/player/:id', TeamController.updateOnePlayer);
    app.delete('/api/player/:id', TeamController.deletePlayer);

}
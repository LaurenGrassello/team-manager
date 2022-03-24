const {Team} = require('../models/team.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    });
}

module.exports.createPlayer = (req, res) =>{
    Team.create(req.body)
    .then(newPlayer => res.json(newPlayer))
    .catch(err => res.status(400).json(err))
}

module.exports.findAllPlayers = (req, res)=> {
    Team.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
    .then(allPlayers => res.json(allPlayers))
    .catch(err => res.status(400).json(err));
}

module.exports.findOnePlayer = (req, res) => {
    Team.findOne({_id: req.params.id})
    .then(onePlayer => res.json(onePlayer))
    .catch(err => res.status(400).json(err))
}

module.exports.updateOnePlayer = (req, res) => {
    Team.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatePlayer => res.json(updatePlayer))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req, res) => {
    Team.deleteOne({_id: req.params.id})
    .then(deleteOnePlayer => res.json(deleteOnePlayer))
    .catch(err => res.status(400).json(err))
}

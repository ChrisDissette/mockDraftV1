const Player = require("../models/player.model");

module.exports.findAllPlayers = (req, res) => {
    Player.find().sort({name:1})
    .then(allPlayers => res.json({player: allPlayers}))
    .catch(err => res.json ({message:"This is an error message", error: err}))
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({player: newPlayer}))
        .catch(err => res.json ({message:"This is an error Message", error: err}))
}

module.exports.findSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
    .then(oneSinglePlayer => res.json({player: oneSinglePlayer}))
    .catch(err => res.json ({message:"This is an error message", error: err}))
}

module.exports.updateSinglePlayer = (req,res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(updatedPlayer => res.json({player: updatedPlayer}))
        .catch(err => res.json ({message:"This is an error message", error: err}))
}

module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(deletedPlayer => res.json({ player: deletedPlayer }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// module.exports.addActor = (req, res) => {
//     Player.updateOne(    
//         { _id: req.params.id},
//         {$push:{actors: req.body.actor}}
//         )
//         .then(result => res.json ({result: result}))
//         .catch(err => res.json({message:"This is an error message", error: err}))
// }
const express = require('express');
const trainerRouter = express.Router();
const trainerService = require('../Services/trainer.js')


trainerRouter.get('/pokemon/:id', (req, res) => {
    const {name, hometown_id} = req.params
    trainerService.read({name, hometown_id}).then((data)=> {
        res.json(data)
    }).catch((err) => {
        res.json(err.toString());
})
})

trainerRouter.get('/pokemon/:id', (req, res) => {
    const {name, hometown_id} = req.params

    res.json()
})

trainerRouter.put('/pokemon/:id', (req, res) => {
    const {name, hometown_id} = req.params

    res.json()
})

trainerRouter.delete('/pokemon/:id', (req, res) => {
    const {name, hometown_id} = req.params

    res.json()
})

trainerRouter.get('/pokemon/:type/all', (req, res) => {
    const {name, hometown_id} = req.params

    res.json()
})

trainerRouter.get('/pokemon/:type/all', (req, res) => {
    const {name, hometown_id} = req.params

    res.json()
})
// POST /trainer/: Creates a new trainer
// GET /trainer/:name: Gets the trainer with the name
// PUT /trainer/:name: Updates the trainer with the name
// DELETE /trainer/:name: Deletes the trainer with the name
// GET /trainer/:name/pokemons: Returns all the pokemon owned by trainer
// GET /trainer/:name/pokemons?levelmin=50: Returns all the pokemon owned by trainer greater or equal to level
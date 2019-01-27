const express = require('express');
const pokeRouter = express.Router();
const pokeService = require('../Services/pokemon.js')


// POST /pokemon/: Creates a new pokemon
// GET /pokemon/:id: Gets the pokemon with the id
// PUT /pokemon/:id: Updates the pokemon with the id
// DELETE /pokemon/:id: Deletes the pokemon with the id
// GET /pokemon/:type/all: Returns all pokemon of that type from either type_1 or type_2

pokeRouter.post('/pokemon', (req, res) => {
    const {trainer_id, name, level, type_1, type_2} = req.params
    pokeService.create(trainer_id, name, level, type_1, type_2).then((data)=> {
        res.json(`Pokemon ${name} has been created!`)
    }).catch((err) => {
        res.json(err.toString());
    })
})

pokeRouter.get('/pokemon/:id', (req, res) => {
    const {trainer_id, name, level, type_1, type_2} = req.params
    pokeService.read(trainer_id, name, level, type_1, type_2).then((data)=> {
        res.json(data)
    }).catch((err) => {
        res.json(err.toString());
})
})

pokeRouter.put('/pokemon/:id', (req, res) => {
    const {trainer_id, name, level, type_1, type_2} = req.params
    pokeService
    res.json()
})

pokeRouter.delete('/pokemon/:id', (req, res) => {
    const {trainer_id, name, level, type_1, type_2} = req.params
    pokeService
    res.json()
})

pokeRouter.get('/pokemon/:type/all', (req, res) => {
    const {trainer_id, name, level, type_1, type_2} = req.params
    pokeService
    res.json()
})
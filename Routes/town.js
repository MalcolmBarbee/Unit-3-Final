const express = require('express');
const townRouter = express.Router();
const townService = require('../Services/town.js')
//GET /town/:name/trainers/
// EG. GET /town/Pallet Town/trainers/

townRouter.get('/town/:name/trainers', (req, res) => {
    const {name} = req.query
    townService.read(name).then((data)=> {
        res.json(data)
    }).catch((err) => {
        res.json(err.toString());
    })
});
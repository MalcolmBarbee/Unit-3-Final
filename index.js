const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokeRoute = require('../PokemonDB/Routes/pokemon.js')
const townRoute = require('../PokemonDB/Routes/town.js')
const trainerRoute = require('../PokemonDB/Routes/trainer.js')


app.use(bodyParser.urlencoded ({ extended: false}))

app.use(bodyParser.json())

//app.use(pokeRoute)
//app.use(townRoute)
//app.use(trainerRoute)

app.listen(port,() => {
    console.log(`Listening to port ${port}`)
})
const promise = require('pg-promise');
const db = promise('://postgres/localhost/pokemon')

const townService = {}

townService.read = (name) => {
    return db.any('SELECT * FROM town WHERE name = ${name}', {name: name})
}

module.exports = {
    townService
}
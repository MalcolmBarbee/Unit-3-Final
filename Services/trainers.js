const promise = require('pg-promise');
const db = promise('//:postgres/localhost/pokemon')

const trainerService = {}

trainerService.create = (trainer_id, name, type_1, type_2, level) => {
    return db.none('INSERT INTO pokemon (trainer_id, name, type_1, type_2, level) VALUES (${trainer_id}, ${name}, ${type_1}, ${type_2}, ${level}', {trainer_id: trainer_id, name: name, type_1: type_1, type_2: type_2, level: level})
}

trainerService.read = (id) => {
    return db.any('SELECT id FROM pokemon WHERE id = ${id}', {id})
}

trainerService.update = (trainer_id, name, type_1, type_2, level) => {
    return db.one('UPDATE pokemon SET trainer_id=${trainer_id}, name=${name}, type_1={type_1}, type_2=${type_2}, level=${level}', {trainer_id: trainer_id, name: name, type_1: type_1, type_2: type_2, level: level})
}

trainerService.delete = (trainer_id, name, type_1, type_2, level) => {
    return db.one('DELETE FROM pokemon WHERE id = ${id}')
}

trainerService.read = () => {
    return db.any('SELECT * FROM trainer WHERE type = ${type_1} OR type = ${type_2}')
}

trainerService.read = () => {
    return db.any('SELECT * FROM trainer JOIN pokemon ON id = trainer_id WHERE(id = id)')
}

module.exports = {
    trainerService
}
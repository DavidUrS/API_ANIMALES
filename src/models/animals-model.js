const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const animalsSchema = new Schema({
    nombre: {type: String, trim: true},
    tipo: {type: String, trim: true}
})

const animalModel = mongoose.model('animals', animalsSchema);

module.exports = animalModel;
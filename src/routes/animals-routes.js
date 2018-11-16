const router = require('express').Router();
const animalController = require('./../controllers/animals-controller');

router.get('/', animalController.getAnimals);

router.post('/', animalController.createAnimal);

router.put('/:id', animalController.editAnimal);

router.delete('/:id',animalController.deleteAnimal);

module.exports = router;
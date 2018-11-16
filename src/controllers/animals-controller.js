const animalController = {};
const Animals = require('./../models/animals-model');

animalController.getAnimals = (req,res)=>{
    Animals.find((err,animals)=>{
        if(err){
            let response = {
                message: 'Hubo un error',
                type: 'danger'
            }
            res.status(500).json(response);
        }
        let response = {
            message: animals,
            type: 'success'
        }
        res.status(201).json(response);
    })
}

animalController.createAnimal = (req,res)=>{
    const newAnimal = new Animals({
        nombre: req.body.nombre,
        tipo: req.body.tipo
    })
    newAnimal.save((err,animal)=>{
        if(err){
            let response = {
                message: 'Hubo un error al crear un animal',
                type: 'danger'
            }
            res.status(500).json(response);
        }
        let response = {
            message: 'Se creo el animal correctamente',
            type: 'success'
        }
        res.status(201).json(response);
    })
}

animalController.editAnimal = (req,res)=>{
    const editAnimal = new Animals({
        _id: req.params.id,
        nombre:req.body.nombre,
        tipo:req.body.tipo
    })
    Animals.findOneAndUpdate({_id:req.params.id}, {$set: editAnimal},(err,animal)=>{
        if(err){
            let response = {
                message: 'Hubo un error al editar el animal',
                type: 'danger'
            }
            res.status(500).json(response);
        }
        let response = {
            message: 'Se edito el animal correctamente',
            type: 'success'
        }
        res.status(201).json(response);
    })
}

animalController.deleteAnimal = (req,res)=>{
    Animals.findOneAndRemove({_id:req.params.id},(err,animal)=>{
        if(err){
            let response = {
                message: 'Hubo un error al eliminar el animal',
                type: 'danger'
            }
            res.status(500).json(response);
        }
        let response = {
            message: 'Se elimino el animal correctamente',
            type: 'success'
        }
        res.status(201).json(response);
    })
}

module.exports = animalController;
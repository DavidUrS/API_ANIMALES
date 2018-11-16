const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api-animales',{ useNewUrlParser: true })
.then(()=>{
    console.log("conectado a la base de datos")
})
.catch((err)=>{
    console.log("Hubo un error al conectarse a la bd", err)
})

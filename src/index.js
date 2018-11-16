const express = require('express');
const app = express();
const { port } = require('./config/keys');
const morgan = require('morgan');
const animalsRouter = require('./routes/animals-routes');

require('./config/database');
app.use(express.json());
app.use(morgan("dev"));
app.use('/animals',animalsRouter)

app.listen(port,()=>{
    console.log(`Servidor escuchando en puerto ${port}`)
})
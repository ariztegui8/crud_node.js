const express = require('express')
const mongoose = require('mongoose')
const {config} = require('dotenv')
const bookRoutes = require('./routes/book-routes')
const bodyParser = require('body-parser')
config()


// Express para los middlewares
const app = express()
app.use(bodyParser.json())

//Conectar a la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Servidor iniciando en el puerto ${port}`);
})
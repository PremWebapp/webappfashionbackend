import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import dbConnection from './config/dbConnection.js';
import routesFIle from './routes/routesFIle.js'

// database connetciones
dbConnection()

// coll express
const app = express()

//use cors middle
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use routes
app.use('/api/files',routesFIle)

//coll env util
const PORT = process.env.PORT || 4000;

// server  start
app.listen(PORT, ()=>{
    console.log(`listing to port ${PORT} `)
})
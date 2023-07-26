import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express'
import dotenv from "dotenv"
dotenv.config()
import Connection from './database/db.js';
import DefalutData from './default.js';
import Router from './routes/route.js';

const user = process.env.user
const pass = process.env.pass

const app = express()
const PORT = process.env.PORT || 8000;
const mongoURI= process.env.MONGODB_URI || `mongodb+srv://${user}:${pass}@cluster0.0suvvd6.mongodb.net/flip-Kart-clone`;

Connection(mongoURI);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.use('/', Router)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

DefalutData();
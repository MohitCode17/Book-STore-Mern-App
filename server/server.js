import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import { Connection } from './database/db.js';
import router from './routes/routes.js';

const app = express();
const PORT = 8000;

dotenv.config();

app.use(cors());
app.use(express.json());

// Using All Routers
app.use('/', router);


// StrickQuery Error handler
mongoose.set('strictQuery', false);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// Database connection method
Connection(username, password);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import rentalRecord from './routes/rental-records.js';
const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/records',rentalRecord);
// get delete and post request 


const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify',false);

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Connection Error:'));
db.once('open', ()=>{
    app.listen(port,() => console.log(`server running on port: ${port}`));
})


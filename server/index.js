import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

// MIDDLEWARE //
app.use(cors());
app.use(express.json());

// ROUTES //

//Create Todo
// app.post("/todos", (req, res) => {
//     try {
        
//     } catch (err) {
//         console.error(err.message)
//     }
// })

//Get todos for display

//Get todo to update or perform CRUD operation on

//Edit or Update todo

//Delete todo

app.listen(5000, () => {
    console.log('listening on port 5000...')
});   
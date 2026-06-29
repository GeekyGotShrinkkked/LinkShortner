import dotenv from "dotenv"; 
import express from "express";
import connectDB from "./config/db";


connectDB();


const app = express();
app.get('/',(req,res) => {
    res.send('API is running with nodemon');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is alive and running on port ${PORT}`));



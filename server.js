import dotenv from "dotenv"; 
import express from "express";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/url.js";

dotenv.config();

connectDB();


const app = express();
app.use(express.json());

//Home route
app.get('/',(req,res) => {
    res.send('API is running with nodemon');
});

app.use("/api",urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is alive and running on port ${PORT}`));



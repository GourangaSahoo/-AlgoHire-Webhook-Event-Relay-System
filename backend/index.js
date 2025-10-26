import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

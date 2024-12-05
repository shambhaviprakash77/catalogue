
import express from 'express';
import route from "./routers/catalogueRoute.js";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json());
const PORT=process.env.PORT;
const URL=process.env.MONGO_URL;
mongoose.connect(URL)
.then(()=>{
    console.log("DB connected successfully!")
    app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`);


});
})
.catch(error=>console.log(error));
app.use("/api",route);



import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to MongoDB!");
    
})

const app = express();
app.use(express.json());
app.use(cors());

// /api/my/user
app.use("/api/my/user", myUserRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000! :)");
})
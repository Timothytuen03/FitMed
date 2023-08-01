import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import path from "path";

const app = express();

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

// middleware
const corsOptions = { origin: `http://localhost:${process.env.PORT}`}; //(frontend URI (ReactJS))
app.use(express.json());    //Allows the app to parse requests with JSON payloads. Based on body-parser
app.use(cors(corsOptions));

// MongoDB Connection & Setup port listening
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server started on port ${process.env.PORT}`);
    })
}).catch(err => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend"});
})

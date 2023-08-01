import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import path from "path";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

// middleware
const corsOptions = { origin: `http://localhost:3000`}; //(frontend URI (ReactJS))
app.use(express.json());    //Allows the app to parse requests with JSON payloads. Based on body-parser
app.use(cors(corsOptions));

// MongoDB Connection & Setup port listening
// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
//     console.log("mongoDB connected successfully")
// }).catch(err => {
//     console.log(err);
// })

app.get("/", (req, res) => {
    // res.status(201).json({message: "Connected to Backend"});
    console.log("fetched");
    let list = ["item1", "hello from backend"];
    res.json(list);
})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})

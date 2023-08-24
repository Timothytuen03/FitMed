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


// middleware
const corsOptions = { origin: `http://localhost:3000`, credentials: true}; //(frontend URI (ReactJS))
app.use(express.json());    //Allows the app to parse requests with JSON payloads. Based on body-parser
// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'fillersecret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        // sameSite: "none",
        // secure: true,
        maxAge: 24*60*60*1000
    }
}))
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection & Setup port listening
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("mongoDB connected successfully")
}).catch(err => {
    console.log(err);
})
// mongoose.connect("mongodb://localhost:27017/FitMedDB", {useNewUrlParser: true});
import User from './models/UserModel.js';
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.get("/", (req, res) => {
//     // res.status(201).json({message: "Connected to Backend"});
//     console.log("fetched");
//     let list = ["item1", "hello from backend"];
//     res.json(list);
// })

app.get("/getuser", (req, res) => {
    console.log("fetch user info")
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.send(req.user);
})

app.post("/api/user/create-account", (req, res) => {
    // console.log(req.body);
    console.log(req.body.username)
    console.log(req.body.password)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // profilePicUrl: 
    })

    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.redirect("/create-account");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/dashboard");
            })
        }
    })
})

app.post("/api/user/login", passport.authenticate('local', {failureMessage: true}), (req, res) => {
    console.log("successful authentication/login")
    console.log(req.user)
    res.send(req.user);
})

app.post("/api/user/logout", (req, res) => {
    // let logoutSuccess;
    req.logout(function(err) {
        if(err) {
            console.log(err)
            // logoutSuccess = err;
        } else {
            console.log("logout: " + req.user);
            res.clearCookie('sid', {path: '/'});
            res.send(true);
        }
    });
    // req.session.destroy();
    console.log(req.user);
    // req.session.destroy(function (err) {
    //     if (!err) {
    //         res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: "Success"});
    //     } else {
    //         console.log("Could not destroy session cookie");
    //     }

    // });
    // res.send(logoutSuccess);
})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})

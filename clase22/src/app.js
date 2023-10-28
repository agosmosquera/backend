import express from "express";
import {generateToken, authToken, authorization, passportCall} from "../utils.js"
import passport from "passport";
import initializePassport from "./passport.config.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 8080;

app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use(express.static("public"))
app.use (cookieParser());
initializePassport();
app.use(passport.initialize());

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    if (!username || !passport) {
        res.status(400).json ({
            message : "error",
            data : "Faltan campos"
        })
    }
    if (username === "coder@coder.com" & password === "1234"){
        const myToken  = generateToken({username, password});
        /* res.status(200).json({
            message : "success",
            data : myToken
        });
        } else {
        res.status(400).json({
            message : "error",
            data : "credenciales invalidas"
        })
        */
       res.cookie("coderCookieToken", myToken, {
        maxAge: 60 * 60 *1000 ,
        httpOnly : true
       })
       .send ({message : "Logged in!"})
    } else {
        res.status(401).json({
            message : "error",
            data : "credenciales invalidas"
        })
    
    }
}) 

app.get("/current", passportCall("jwt"), authorization("admin"), (req, res) => {
    res.send(req.user)
})

// app.get("/current", passport.authenticate('jwt',{session:false}), (req,res)=> {
//     res.send(req.user)
// })

app.listen(PORT, ( ) => {
    console.log("Server started " + PORT);
});




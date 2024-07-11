import express from "express";

const app = express();
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hiiii bitches')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post('/login', (req, res) => {
    if (req.body.password === "PASSWORD") {
        res.cookie('authToken', "VERY_LEGIT_TOKEN", {maxAge: 90000, httpOnly: true});
        res.redirect('/dashboard')
    } 
    else {
        return res.send('Incorrect passcode ! ')
    }
})

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html')
})

app.get('/logout', (req, res) => {
    res.clearCookie('authToken')
    return res.redirect('/login')
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})
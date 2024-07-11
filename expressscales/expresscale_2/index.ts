import express from "express";
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("ayoooo")
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.post('/login', (req, res) => {
    if (req.body.password === "SEXYSECRETPASS") {
        res.cookie('authToken', "SEXY_SECRET_TOKEN", {maxAge: 900000, httpOnly: true})
        return res.redirect('/dashboard')
    }
    else {
        return res.send('Incorrect password')
    }
})

app.get('/dashboard', (req, res) => {
    if (req.cookies.authToken === "SEXY_SECRET_TOKEN") {
        return res.sendFile(__dirname + "/dashboard.html")
    }
})

app.get('/logout', (req, res) => {
    res.clearCookie('authToken'); 
    return res.redirect('/login')
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});


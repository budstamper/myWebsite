var express = require('express')
var app = express()
var morgan = require("morgan")
var mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8000
const authRoutes = require('./routes/authRouter')
const expressJWT = require('express-jwt')
const allRoutes = require('./routes/allRouter')
const allRoutes2 = require('./routes/allRouter2')
const path = require("path")

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))


//connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/secrets", {useNewUrlParser:true})
.then(()=>console.log('Successfully connected to mongoDB'))
.catch(err=>console.log(err))

//connect to mongo
// mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true})
//     .then(()=>console.log('Successfully connected to mongoDB'))
//     .catch(err=>console.log(err))

//decode jwt and add req.user to all requests sent to /api
app.use('/api', expressJWT({secret: process.env.SECRET}))

app.use('/api/all', allRoutes)
app.use('/auth', authRoutes)
app.use('/all', allRoutes2)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log("starting")
})



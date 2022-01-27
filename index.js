const express = require('express');
const bodyParser = require('body-parser')
const router = require('express').Router();

const apiRouter = require('./routes/api')

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter)

// router.get("/ping", (req, res) => {
//     res.send("pong")
// })

app.listen(3500, () => {
    console.log('Servidor arrancado en http://localhost:3500/');
})

module.exports = {
    app: app
}
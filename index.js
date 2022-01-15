const express = require('express');
const bodyParser = require('body-parser')

const apiRouter = require('./routes/api');
const path = require('path')
const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static('public'))

app.listen(3500, () => {
    console.log('Servidor arrancado en http://localhost:3500/');
})


module.exports = {
    app:app
}
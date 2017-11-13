const express = require('express')
const path = require('path')
const parser = require('body-parser')

const db = require('../database/db.js')
const router = require('./router.js')

const app = express();

let port = 9000;

app.use(parser.json())
  .use(parser.urlencoded({extended: true}))
  .use(express.static(path.resolve(__dirname, '../client')))
  .use('/main', router)
  .get('/*', function (req, res) {
    console.log(req.body);
    res.send('wildcard endpoint ==== ')
  })

app.listen(port, function() {
  console.log('server listening...');
})
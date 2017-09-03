const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var data = require('./data')

app.use(bodyParser.json())

//วิธีกำหนด routing หรือ API endpoint
app.get('/', function (req, res) {
  res.send('API Started')
})

app.get('/accounts', function (req, res) {
  res.json(data.accounts)
})

app.get('/account/:id', function (req, res) {
  var account = data.accounts.filter(acc => acc.account_id === req.params.id);
  res.json(account)
})

app.post('/account/add', function (req, res) {
  data.accounts.push(req.body)
  res.json(req.body)
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
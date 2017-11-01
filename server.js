var express = require('express');
var app = express();

// allows index.html to access anything in the public folder
app.use(express.static('./public'))

// app.use(express.static('./public/img'))

app.get('/', function(request, response) {
  response.sendFile('./public/html/index.html', {root: './'})
  console.log('sent index.html')
})

app.get('/hatteras.html', function(request, response) {
  response.sendFile('./public/html/hatteras.html', {root: './'})
  console.log('sent hatteras.html')
})

app.get('/nola.html', function(request, response) {
  response.sendFile('./public/html/nola.html', {root: './'})
  console.log('sent nola.html')
})

app.get('/austin.html', function(request, response) {
  response.sendFile('./public/html/austin.html', {root: './'})
  console.log('sent austin.html')
})

app.get('/boulder.html', function(request, response) {
  response.sendFile('./public/html/boulder.html', {root: './'})
  console.log('sent boulder.html')
})




// 404 error catch
app.use(function(req, res) {
  res.send('this is a 404 error, yo')
})

// denotes the port in which the app is listening on.
app.listen(8080, function() {
  console.log('the app is running on port 8080')
})

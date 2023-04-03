const express = require('express')
const app = express()
const PORT = 8


// create get request for index page
app.get('/', (request, response) => {
    response.sendFile('index.html')
})
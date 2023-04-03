const express = require('express')
const app = express()
const PORT = 8


// create get request for index page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// create listen for PORT
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
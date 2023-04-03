const express = require('express')
const app = express()
const PORT = 8

const drugs = {
    'adderall': {
        name: 'Adderall',
        image: '#',
        description: 'A small description',
        abusePotential: 'High'
    }, 
    'bacitracin': {
        name: 'Bacitracin',
        image: '#',
        description: 'A small description',
        abusePotential: 'Low'
    },
    'amoxilcillin': {
        name: 'Amoxilcillin',
        image: '#',
        description: 'A small description',
        abusePotential: 'Low'
    }
}




// create get request for index page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// create get request for style sheet
app.get('/styles.css', (request, response) => {
    response.sendFile(__dirname + '/styles.css')
})

// create get request for js file
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})


// create get request for API
app.get('/api:drug', (request, response) => {
    const userInput = request.params.drug.toLowerCase()
    if (drug[userInput]) {
        response.json(drug[userInput])
    }
    else {
        alert('That does not exist!')
    }
})


// create listen for PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
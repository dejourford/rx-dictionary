const express = require('express')
const app = express()
const PORT = 8

const drugs = {
    'adderall': {
        brandName: 'Adderall',
        genericName: 'D-Amphetamine',
        image: '#',
        description: 'A stimulant used to treat attention deficit disorder (ADD)',
        abusePotential: 'High'
    }, 
    'd-amphetamine': {
        brandName: 'Adderall',
        genericName: 'D-Amphetamine',
        image: '#',
        description: 'A stimulant used to treat attention deficit disorder (ADD)',
        abusePotential: 'Low'
    },
    'amoxil': {
        brandName: 'Amoxil',
        genericName: 'Amoxicillin',
        image: '#',
        description: 'A penicillin antibiotic that fights bacteria',
        abusePotential: 'Low'
    },
    'amoxicillin': {
        brandName: 'Amoxil',
        genericName: 'Amoxicillin',
        image: '#',
        description: 'A penicillin antibiotic that fights bacteria',
        abusePotential: 'Low'
    },
    'tylenol': {
        brandName: 'Tylenol',
        genericName: 'Acetaminophen',
        image: '#',
        description: 'A pain reliver and fever reducer',
        abusePotential: 'Low'
    },
    'acetaminophen': {
        brandName: 'Tylenol',
        genericName: 'Amoxilcillin',
        image: '#',
        description: 'A pain reliever and fever reducer',
        abusePotential: 'Low'
    },
    'elavil': {
        brandName: 'Elavil',
        genericName: 'Amitriptyline',
        image: '#',
        description: 'An anti-depressant with sedative effects',
        abusePotential: 'Low'
    },
    'amitriptyline': {
        brandName: 'Elavil',
        genericName: 'Amitriptyline',
        image: '#',
        description: 'An anti-depressant with sedative effects',
        abusePotential: 'Low'
    },
    'norvasc': {
        brandName: 'Norvasc',
        genericName: 'Amlodipine',
        image: '#',
        description: 'A medicine used to treat high blood pressure (hypertension)',
        abusePotential: 'Low'
    },
    'amlodipine': {
        brandName: 'Norvasc',
        genericName: 'Amlodipine',
        image: '#',
        description: 'A medicine used to treat high blood pressure (hypertension)',
        abusePotential: 'Low'
    },
    'ativan': {
        brandName: 'Ativan',
        genericName: 'Lorazepam',
        image: '#',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'lorazepam': {
        brandName: 'Ativan',
        genericName: 'Lorazepam',
        image: '#',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'lipitor': {
        brandName: 'Lipitor',
        genericName: 'Atorvastatin',
        image: '#',
        description: 'A medicine used to treat high cholesterol',
        abusePotential: 'Low'
    },
    'atorvastatin': {
        brandName: 'Lipitor',
        genericName: 'Atorvastatin',
        image: '#',
        description: 'A medicine used to treat high cholesterol',
        abusePotential: 'Low'
    },
    'zithromax': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'azithromycin': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'z-pak': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'tessalon': {
        brandName: 'Tessalon',
        genericName: 'Benzonatate',
        image: '#',
        description: 'A medicine used to suppress coughing',
        abusePotential: 'Low'
    },
    'benzonatate': {
        brandName: 'Tessalon',
        genericName: 'Benzonatate',
        image: '#',
        description: 'A medicine used to suppress coughing',
        abusePotential: 'Low'
    },
    'brilinta': {
        brandName: 'Brilinta',
        genericName: 'Ticagrelor',
        image: '#',
        description: 'A medicine used to prevent blood clots',
        abusePotential: 'Low'
    },
    'ticagrelor': {
        brandName: 'Brilinta',
        genericName: 'Ticagrelor',
        image: '#',
        description: 'A medicine used to prevent blood clots',
        abusePotential: 'Low'
    },
    'subutex': {
        brandName: 'Subutex',
        genericName: 'Buprenorphine',
        image: '#',
        description: 'A medicine used to treat opioid addiciton',
        abusePotential: 'High'
    },
    'buprenorphine': {
        brandName: 'Subutex',
        genericName: 'Buprenorphine',
        image: '#',
        description: 'A medicine used to treat opiod addiction',
        abusePotential: 'High'
    },
    'keflex': {
        brandName: 'Keflex',
        genericName: 'Cephalexin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'cephalexin': {
        brandName: 'Keflex',
        genericName: 'Cephalexin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'cipro': {
        brandName: 'Cipro',
        genericName: 'Ciprofloxacin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'ciprofloxacin': {
        brandName: 'Cipro',
        genericName: 'Ciprofloxacin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'celexa': {
        brandName: 'Celexa',
        genericName: 'Citalopram',
        image: '#',
        description: 'A medicine used to treat depression or mood',
        abusePotential: 'Low'
    },
    'citalopram': {
        brandName: 'Celexa',
        genericName: 'Citalopram',
        image: '#',
        description: 'A medicine used to treat depression or mood',
        abusePotential: 'Low'
    },
    'cleocin': {
        brandName: 'Cleocin',
        genericName: 'Clindamycin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'clindamycin': {
        brandName: 'Cleocin',
        genericName: 'Clindamycin',
        image: '#',
        description: 'An antibiotic used to fight bacteria',
        abusePotential: 'Low'
    },
    'klonopin': {
        brandName: 'Klonopin',
        genericName: 'Clonazepam',
        image: '#',
        description: 'A medicine used to treat seizure and panic disorders',
        abusePotential: 'High'
    },
    'clonazepam': {
        brandName: 'Klonopin',
        genericName: 'Clonazepam',
        image: '#',
        description: 'A medicine used to treat seizure and panic disorders',
        abusePotential: 'High'
    },
    'flexeril': {
        brandName: 'Flexeril',
        genericName: 'Cyclobenzaprine',
        image: '#',
        description: 'A medicine used to relax muscles',
        abusePotential: 'Medium'
    },
    'cyclobenzaprine': {
        brandName: 'Flexeril',
        genericName: 'Cyclobenzaprine',
        image: '#',
        description: 'A medicine used to relax muscles',
        abusePotential: 'Medium'
    },
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
app.get('/api', (request, response) => {
    response.json(drugs)
   
})


// create get request for API
app.get('/api/:drug', (request, response) => {
    const userInput = request.params.drug.toLowerCase()
    if (drugs[userInput]) {
        response.json(drugs[userInput])
    }
    else {
        alert('That does not exist!')
    }
})


// create listen for PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
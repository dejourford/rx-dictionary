const express = require('express')
const app = express()
const PORT = 8

const drugs = {
    'adderall': {
        brandName: 'Adderall',
        genericName: 'D-Amphetamine',
        description: 'A medicine used to treat attention deficit disorder (ADD)',
        abusePotential: 'High'
    }, 
    'd-amphetamine': {
        brandName: 'Adderall',
        genericName: 'D-Amphetamine',
        description: 'A medicine used to treat attention deficit disorder (ADD)',
        abusePotential: 'Low'
    },
    'amoxil': {
        brandName: 'Amoxil',
        genericName: 'Amoxicillin',
        description: 'A medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'amoxicillin': {
        brandName: 'Amoxil',
        genericName: 'Amoxicillin',
        description: 'A medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'tylenol': {
        brandName: 'Tylenol',
        genericName: 'Acetaminophen',
        description: 'A medicine used to treat pain or fever',
        abusePotential: 'Low'
    },
    'acetaminophen': {
        brandName: 'Tylenol',
        genericName: 'Amoxilcillin',
        description: 'A medicine used to treat pain or fever',
        abusePotential: 'Low'
    },
    'elavil': {
        brandName: 'Elavil',
        genericName: 'Amitriptyline',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'amitriptyline': {
        brandName: 'Elavil',
        genericName: 'Amitriptyline',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'norvasc': {
        brandName: 'Norvasc',
        genericName: 'Amlodipine',
        description: 'A medicine used to treat high blood pressure (hypertension)',
        abusePotential: 'Low'
    },
    'amlodipine': {
        brandName: 'Norvasc',
        genericName: 'Amlodipine',
        description: 'A medicine used to treat high blood pressure (hypertension)',
        abusePotential: 'Low'
    },
    'ativan': {
        brandName: 'Ativan',
        genericName: 'Lorazepam',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'lorazepam': {
        brandName: 'Ativan',
        genericName: 'Lorazepam',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'lipitor': {
        brandName: 'Lipitor',
        genericName: 'Atorvastatin',
        description: 'A medicine used to treat high cholesterol',
        abusePotential: 'Low'
    },
    'atorvastatin': {
        brandName: 'Lipitor',
        genericName: 'Atorvastatin',
        description: 'A medicine used to treat high cholesterol',
        abusePotential: 'Low'
    },
    'zithromax': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'azithromycin': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'z-pak': {
        brandName: 'Zithromax',
        genericName: 'Azithromycin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'tessalon': {
        brandName: 'Tessalon',
        genericName: 'Benzonatate',
        description: 'A medicine used to suppress coughing',
        abusePotential: 'Low'
    },
    'benzonatate': {
        brandName: 'Tessalon',
        genericName: 'Benzonatate',
        description: 'A medicine used to suppress coughing',
        abusePotential: 'Low'
    },
    'brilinta': {
        brandName: 'Brilinta',
        genericName: 'Ticagrelor',
        description: 'A medicine used to prevent blood clots',
        abusePotential: 'Low'
    },
    'ticagrelor': {
        brandName: 'Brilinta',
        genericName: 'Ticagrelor',
        description: 'A medicine used to prevent blood clots',
        abusePotential: 'Low'
    },
    'subutex': {
        brandName: 'Subutex',
        genericName: 'Buprenorphine',
        description: 'A medicine used to treat opioid addiciton',
        abusePotential: 'High'
    },
    'buprenorphine': {
        brandName: 'Subutex',
        genericName: 'Buprenorphine',
        description: 'A medicine used to treat opiod addiction',
        abusePotential: 'High'
    },
    'keflex': {
        brandName: 'Keflex',
        genericName: 'Cephalexin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'cephalexin': {
        brandName: 'Keflex',
        genericName: 'Cephalexin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'cipro': {
        brandName: 'Cipro',
        genericName: 'Ciprofloxacin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'ciprofloxacin': {
        brandName: 'Cipro',
        genericName: 'Ciprofloxacin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'celexa': {
        brandName: 'Celexa',
        genericName: 'Citalopram',
        description: 'A medicine used to treat depression or mood',
        abusePotential: 'Low'
    },
    'citalopram': {
        brandName: 'Celexa',
        genericName: 'Citalopram',
        description: 'A medicine used to treat depression or mood',
        abusePotential: 'Low'
    },
    'cleocin': {
        brandName: 'Cleocin',
        genericName: 'Clindamycin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'clindamycin': {
        brandName: 'Cleocin',
        genericName: 'Clindamycin',
        description: 'An medicine used to fight bacteria',
        abusePotential: 'Low'
    },
    'klonopin': {
        brandName: 'Klonopin',
        genericName: 'Clonazepam',
        description: 'A medicine used to treat seizure and panic disorders',
        abusePotential: 'High'
    },
    'clonazepam': {
        brandName: 'Klonopin',
        genericName: 'Clonazepam',
        description: 'A medicine used to treat seizure and panic disorders',
        abusePotential: 'High'
    },
    'flexeril': {
        brandName: 'Flexeril',
        genericName: 'Cyclobenzaprine',
        description: 'A medicine used to relax muscles',
        abusePotential: 'Medium'
    },
    'cyclobenzaprine': {
        brandName: 'Flexeril',
        genericName: 'Cyclobenzaprine',
        description: 'A medicine used to relax muscles',
        abusePotential: 'Medium'
    },
    'cymbalta': {
        brandName: 'Cymbalta',
        genericName: 'Duloxetine',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'duloxetine': {
        brandName: 'Cymbalta',
        genericName: 'Duloxetine',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'acticlate': {
        brandName: 'Acticlate',
        genericName: 'Doxycycline',
        description: 'A medicine used to treat bacterial infections',
        abusePotential: 'Low'
    },
    'doxycycline': {
        brandName: 'Acticlate',
        genericName: 'Doxycycline',
        description: 'A medicine used to treat bacterial infections',
        abusePotential: 'Low'
    },
    'dupixent': {
        brandName: 'Dupixent',
        genericName: 'Dupilumab',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'dupilumab': {
        brandName: 'Dupixent',
        genericName: 'Dupilumab',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'farxiga': {
        brandName: 'Farxiga',
        genericName: 'Dapagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'dapagliflozin': {
        brandName: 'Farxiga',
        genericName: 'Dapagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'fentanyl': {
        brandName: 'Fentanyl',
        genericName: 'Fentanyl',
        description: 'A medicine used to treat pain',
        abusePotential: 'High'
    },
    'neurontin': {
        brandName: 'Neurontin',
        genericName: 'Gabapentin',
        description: 'A medicine used to treat seizures or nerve pain',
        abusePotential: 'Low'
    },
    'gabapentin': {
        brandName: 'Neurontin',
        genericName: 'Gabapentin',
        description: 'A medicine used to treat seizures or nerve pain',
        abusePotential: 'Low'
    },
    'humira': {
        brandName: 'Humira',
        genericName: 'Adalimumab',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'adalimumab': {
        brandName: 'Humira',
        genericName: 'Adalimumab',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'hctz': {
        brandName: 'Microzide',
        genericName: 'Hydrochlorothiazide',
        description: 'A medicine used to increase urination and control high blood pressure',
        abusePotential: 'Low'
    },
    'hydrochlorothiazide': {
        brandName: 'Microzide',
        genericName: 'Hydrochlorothiazide',
        description: 'A medicine used to increase urination and control high blood pressure',
        abusePotential: 'Low'
    },
    'Plaquenil': {
        brandName: 'Plaquenil',
        genericName: 'Hydroxychloroquine',
        description: 'A medicine used to treat or prevent malaria',
        abusePotential: 'Low'
    },
    'hydroxychloroquine': {
        brandName: 'Plaquenil',
        genericName: 'Hydroxychloroquine',
        description: 'A medicine used to treat or prevent malaria',
        abusePotential: 'Low'
    },
    'advil': {
        brandName: 'Advil or Motrin',
        genericName: 'Ibuprofen',
        description: 'A medicine used to treat pain or fever',
        abusePotential: 'Low'
    },
    'motrin': {
        brandName: 'Advil or Motrin',
        genericName: 'Ibuprofen',
        description: 'A medicine used to treat pain or fever',
        abusePotential: 'Low'
    },
    'ibuprofen': {
        brandName: 'Advil or Motrin',
        genericName: 'Ibuprofen',
        description: 'A medicine used to treat pain or fever',
        abusePotential: 'Low'
    },
    'invokana': {
        brandName: 'Invokana',
        genericName: 'Canagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'canagliflozin ': {
        brandName: 'Invokana',
        genericName: 'Canagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'sitagliptin': {
        brandName: 'Januvia',
        genericName: 'sitagliptin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'januvia': {
        brandName: 'Januvia',
        genericName: 'sitagliptin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'jardiance': {
        brandName: 'Jardiance',
        genericName: 'Empagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'empagliflozin': {
        brandName: 'Jardiance',
        genericName: 'Empagliflozin',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'lexapro': {
        brandName: 'Lexapro',
        genericName: 'Escitalopram',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'escitalopram': {
        brandName: 'Lexapro',
        genericName: 'Escitalopram',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'zestril': {
        brandName: 'Zestril',
        genericName: 'Lisinopril',
        description: 'A medicine used to treat high blood pressure',
        abusePotential: 'Low'
    },
    'lisinopril': {
        brandName: 'Zestril',
        genericName: 'Lisinopril',
        description: 'A medicine used to treat high blood pressure',
        abusePotential: 'Low'
    },
    'alavert': {
        brandName: 'Alavert or Claritin',
        genericName: 'Loratidine',
        description: 'A medicine used to treat seasonal allergies',
        abusePotential: 'Low'
    },
    'claritin': {
        brandName: 'Alavert or Claritin',
        genericName: 'Loratidine',
        description: 'A medicine used to treat seasonal allergies',
        abusePotential: 'Low'
    },
    'loratidine': {
        brandName: 'Alavert or Claritin',
        genericName: 'Loratidine',
        description: 'A medicine used to treat seasonal allergies',
        abusePotential: 'Low'
    },
    'lyrica': {
        brandName: 'Lyrica',
        genericName: 'Pregabalin',
        description: 'A medicine used to treat seizures and nerve pain',
        abusePotential: 'Medium'
    },
    'pregabalin': {
        brandName: 'Lyrica',
        genericName: 'Pregabalin',
        description: 'A medicine used to treat seizures and nerve pain',
        abusePotential: 'Medium'
    },
    'melatonin': {
        brandName: 'Melatonin',
        genericName: 'Melatonin',
        description: 'A medicine used to maintain the wake/sleep cycle',
        abusePotential: 'Low'
    },
    'mobic': {
        brandName: 'Mobic',
        genericName: 'Meloxicam',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'meloxicam': {
        brandName: 'Mobic',
        genericName: 'Meloxicam',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'glucophage': {
        brandName: 'Glucophage',
        genericName: 'Metoformin',
        description: 'A medicine used to lower blood sugar levels',
        abusePotential: 'Low'
    },
    'metformin': {
        brandName: 'Glucophage',
        genericName: 'Metformin',
        description: 'A medicine used to lower blood sugar levels',
        abusePotential: 'Low'
    },
    'dolophine': {
        brandName: 'Dolophine',
        genericName: 'Methadone',
        description: 'A medicine used to treat pain',
        abusePotential: 'High'
    },
    'methadone': {
        brandName: 'Dolophine',
        genericName: 'Methadone',
        description: 'A medicine used to treat pain',
        abusePotential: 'High'
    },
    'trexall': {
        brandName: 'Trexall',
        genericName: 'Methotrexate',
        description: 'A medicine used to treat types of cancer and arthritis',
        abusePotential: 'Low'
    },
    'methotrexate': {
        brandName: 'Trexall',
        genericName: 'Methotrexate',
        description: 'A medicine used to treat types of cancer and arthritis',
        abusePotential: 'Low'
    },
    'toprol': {
        brandName: 'Toprol',
        genericName: 'Metoprolol',
        description: 'A medicine used to treat high blood pressure',
        abusePotential: 'Low'
    },
    'metoprolol': {
        brandName: 'Toprol',
        genericName: 'Metoprolol',
        description: 'A medicine used to treat high blood pressure',
        abusePotential: 'Low'
    },
    'narcan': {
        brandName: 'Narcan',
        genericName: 'Naloxone',
        description: 'A medicine used to reverse opiod overdose',
        abusePotential: 'Low'
    },
    'naloxone': {
        brandName: 'Narcan',
        genericName: 'Naloxone',
        description: 'A medicine used to reverse opiod overdose',
        abusePotential: 'Low'
    },
    'vivitrol': {
        brandName: 'Vivitrol',
        genericName: 'Naltrexone',
        description: 'A medicine used to treat alcohol and opiod disorder',
        abusePotential: 'Low'
    },
    'naltrexone': {
        brandName: 'Vivitrol',
        genericName: 'Naltrexone',
        description: 'A medicine used to treat alcohol and opiod disorder',
        abusePotential: 'Low'
    },
    'aleve': {
        brandName: 'Aleve',
        genericName: 'Naproxen',
        description: 'A medicine used to treat pain and inflammation',
        abusePotential: 'Low'
    },
    'naproxen': {
        brandName: 'Aleve',
        genericName: 'Naproxen',
        description: 'A medicine used to treat pain and inflammation',
        abusePotential: 'Low'
    },
    'nurtec': {
        brandName: 'Nurtec',
        genericName: 'Rimigepant',
        description: 'A medicine used to treat cluster headaches or migraines',
        abusePotential: 'Low'
    },
    'rimigepant': {
        brandName: 'Nurtec',
        genericName: 'Rimigepant',
        description: 'A medicine used to treat cluster headaches or migraines',
        abusePotential: 'Low'
    },
    'prilosec': {
        brandName: 'Prilosec',
        genericName: 'Omeprazole',
        description: 'A medicine used to treat acid reflux in the stomach',
        abusePotential: 'Low'
    },
    'omeprazole': {
        brandName: 'Prilosec',
        genericName: 'Omeprazole',
        description: 'A medicine used to treat acid reflux in the stomach',
        abusePotential: 'Low'
    },
    'otezla': {
        brandName: 'Otezla',
        genericName: 'Apremilast',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'apremilast': {
        brandName: 'Otezla',
        genericName: 'Apremilast',
        description: 'A medicine used to treat inflammation',
        abusePotential: 'Low'
    },
    'ozempic': {
        brandName: 'Ozempic',
        genericName: 'Semaglutide',
        description: 'A medicine used to improve blood sugar levels',
        abusePotential: 'Low'
    },
    'semaglutide': {
        brandName: 'Ozempic',
        genericName: 'Semaglutide',
        description: 'A medicine used to improve blood sugar levels',
        abusePotential: 'Low'
    },
    'protonix': {
        brandName: 'Protonix',
        genericName: 'Pantoprazole',
        description: 'A medicine used to decrease the amount of acid produced in the stomach',
        abusePotential: 'Low'
    },
    'pantoprazole': {
        brandName: 'Protonix',
        genericName: 'Pantoprazole',
        description: 'A medicine used to decrease the amount of acid produced in the stomach',
        abusePotential: 'Low'
    },
    'plan b': {
        brandName: 'Plan B',
        genericName: 'Levonorgestrel',
        description: 'A medicine used to prevent pregnancy after unprotected sex',
        abusePotential: 'Low'
    },
    'levonorgestrel': {
        brandName: 'Plan B',
        genericName: 'Levonorgestrel',
        description: 'A medicine used to prevent pregnancy after unprotected sex',
        abusePotential: 'Low'
    },
    'prednisone': {
        brandName: 'Prednisone',
        genericName: '',
        description: 'A steroid used to treat inflammation and keep immune system in check',
        abusePotential: 'Low'
    },
    'rybelsus': {
        brandName: 'Rybelsus',
        genericName: 'Semaglutide',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'semaglutide': {
        brandName: 'Rybelsus',
        genericName: 'Semaglutide',
        description: 'A medicine used to control blood sugar levels',
        abusePotential: 'Low'
    },
    'ultram': {
        brandName: 'Ultram',
        genericName: 'Tramadol',
        description: 'A medicine used to treat pain',
        abusePotential: 'High'
    },
    'tramadol': {
        brandName: 'Ultram',
        genericName: 'Tramadol',
        description: 'A medicine used to treat pain',
        abusePotential: 'High'
    },
    'trazodone': {
        brandName: 'Trazodone',
        genericName: '',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'viagra': {
        brandName: 'Viagra',
        genericName: 'Sildenafil',
        description: 'A medicine used to treat erectile dysfunction',
        abusePotential: 'Low'
    },
    'sildenafil': {
        brandName: 'Viagra',
        genericName: 'Sildenafil',
        description: 'A medicine used to treat erectile dysfunction',
        abusePotential: 'Low'
    },
    'wellbutrin': {
        brandName: 'Wellbutrin',
        genericName: 'Bupropion',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'bupropion': {
        brandName: 'Wellbutrin',
        genericName: 'Bupropion',
        description: 'A medicine used to treat depression',
        abusePotential: 'Low'
    },
    'xanax': {
        brandName: 'Xanax',
        genericName: 'Alprazolam',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'alprazolam': {
        brandName: 'Xanax',
        genericName: 'Alprazolam',
        description: 'A medicine used to treat anxiety disorders',
        abusePotential: 'High'
    },
    'zubsolv': {
        brandName: 'Zubsolv',
        genericName: 'Buprenorphine and Naloxone',
        description: 'A medicine used to treat opioid addiction',
        abusePotential: 'High'
    },
    'buprenorphine and naloxone': {
        brandName: 'Zubsolv',
        genericName: 'Buprenorphine and Naloxone',
        description: 'A medicine used to treat opioid addiction',
        abusePotential: 'High'
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
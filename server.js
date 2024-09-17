// server.js

// Importing Express
const express = require('express');
const app = express();
const port = 3000;
// const port = process.env.PORT || 3000;


// Sample data for hospitals
const hospitals = [
    {
        id: 1,
        name: 'sahara',
        location: 'indira nagar',
        bedsAvailable: 10
    },
    {
        id: 2,
        name: 'Hospital B',
        location: 'Location B',
        bedsAvailable: 5
    },
    {
       id: 3,
        name: 'fourth hospital',
        location: 'matiyari',
        bedsAvailable:  8
    },
    {
       id: 4,
        name: 'kaykalp hospital',
        location: 'delhi',
        bedsAvailable:  7
    },
    {
       id: 5,
        name: 'apollo hospital',
        location: 'delhi',
        bedsAvailable:  8
    }
];

// Middleware to serve static files (for front-end)
app.use(express.static('public'));

// API endpoint to get hospital data
app.get('/api/hospitals', (req, res) => {
    const { location } = req.query;
    if (location) {
        const filteredHospitals = hospitals.filter(h => h.location.toLowerCase().includes(location.toLowerCase()));
        res.json(filteredHospitals);
    } else {
        res.json(hospitals);
    }
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

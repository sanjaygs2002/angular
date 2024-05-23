const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Sample crop prediction logic (replace with your actual logic)
const predictCrop = (soilData) => {
    const { nitrogen, phosphorous, potassium, temperature, ph } = soilData;

    // Define thresholds for different crops
    const cropConditions = [
        {
            name: 'Wheat',
            conditions: (n, p, k, t, ph) => n > 50 && p > 30 && k > 20 && t > 15 && t < 25 && ph > 6 && ph < 8
        },
        {
            name: 'Rice',
            conditions: (n, p, k, t, ph) => n < 50 && p < 30 && k < 20 && t > 20 && t < 30 && ph > 5 && ph < 6.5
        },
        {
            name: 'Maize',
            conditions: (n, p, k, t, ph) => n > 30 && n < 60 && p > 20 && p < 40 && k > 20 && k < 40 && t > 20 && t < 30 && ph > 5.5 && ph < 7
        },
        {
            name: 'Barley',
            conditions: (n, p, k, t, ph) => n > 40 && n < 70 && p > 30 && p < 50 && k > 30 && k < 50 && t > 10 && t < 20 && ph > 6 && ph < 8
        },
        {
            name: 'Soybean',
            conditions: (n, p, k, t, ph) => n > 30 && n < 60 && p > 20 && p < 40 && k > 20 && k < 40 && t > 15 && t < 25 && ph > 6 && ph < 7.5
        },
        {
            name: 'Cotton',
            conditions: (n, p, k, t, ph) => n > 20 && n < 50 && p > 10 && p < 30 && k > 10 && k < 30 && t > 25 && t < 35 && ph > 5 && ph < 7.5
        },
        {
            name: 'Tomato',
            conditions: (n, p, k, t, ph) => n > 40 && n < 70 && p > 30 && p < 50 && k > 40 && k < 60 && t > 18 && t < 28 && ph > 6 && ph < 6.8
        },
        {
            name: 'Potato',
            conditions: (n, p, k, t, ph) => n > 50 && n < 80 && p > 40 && p < 60 && k > 50 && k < 70 && t > 15 && t < 25 && ph > 5 && ph < 6.5
        }
    ];

    // Check conditions for each crop
    for (const crop of cropConditions) {
        if (crop.conditions(nitrogen, phosphorous, potassium, temperature, ph)) {
            return crop.name;
        }
    }

    // Default crop if no conditions match
    return 'Unknown Crop';
};

app.post('/predict', (req, res) => {
    const soilData = req.body;
    const predictedCrop = predictCrop(soilData);
    res.json({ crop: predictedCrop });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

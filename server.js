// server.js will direct survey results to the server and also write to a json file

const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Import the file system module

const app = express();

app.use(cors());
app.use(express.json());

let surveyResults = [];

// Post survey results to the server located at port 3000, http://localhost:3000/survey-results

app.post('/survey-results', (req, res) => {
    console.log('Received survey results:', req.body);
    surveyResults.push(req.body);

    // Debug: Log the directory name
    console.log('__dirname:', __dirname);

    // Write the individual results to a json file called survey-results.json located in the data folder
    const filePath = 'src/data/survey-results.json'; // Changed path
    fs.writeFile(filePath, JSON.stringify(surveyResults, null, 2), (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
            return res.status(500).send({ status: 'error', message: 'Internal Server Error' });
        }
        
        console.log(`Survey results written to ${filePath}`);
        res.send({ status: 'success' });
    });
});

app.get('/survey-results', (req, res) => {
    res.send(surveyResults);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});

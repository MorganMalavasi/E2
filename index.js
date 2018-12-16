const express = require ('express');
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;

const getArea = require ('./area.js');

app.get('/', (req,res) => {
    res.send('hello world');
    res.end();
});

app.get('/getArea', (req,res) => {
    let lat1 = parseInt(req.query.side1);
    let lat2 = parseInt(req.query.side2);

    // check if they are numbers
    if (isNaN(lat1) || isNaN(lat2))
        return res.status(400).json({'area': -1});

    let area = getArea.getArea([lat1,lat2]);
    if (area == -1)
        return res.status(400).json({'area': area});
    else 
        return res.status(200).json({'area': area});
});

app.listen(PORT, () => {
    console.log('Listening on port 3000');
});
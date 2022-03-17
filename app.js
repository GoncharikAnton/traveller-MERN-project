const config = require('config');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the server!',
        app: 'Traveller'
    })
});

app.post( '/', (req, res) => {
    res.json({message: "You can post to this endpoint..."})
})

const PORT = config.get('PORT') || 5000;
app.listen(PORT, () => {
    console.log(`!!!!!!!!!!!!!!!Server running on port ${PORT}!!!!!!!!!!!!!!!!!!!!!!!!!`)
})
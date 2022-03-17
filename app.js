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

const port = 5000;
app.listen(port, () => {
    console.log(`!!!!!!!!!!!!!!!Server running on port ${port}!!!!!!!!!!!!!!!!!!!!!!!!!`)
})
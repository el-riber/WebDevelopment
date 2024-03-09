// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3008;

// Conditional Routing
app.get('/foo', (req, res, next) => {
    const random = Math.random();
    if (random < 0.5) {
        res.send('sometimes this');
    } else {
        next();
    }
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

// Error Handling
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

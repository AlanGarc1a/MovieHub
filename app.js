const express = require('express');
const cors = require('cors');
const path = require('path');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.use('/api/movies', movieRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}

module.exports = app;
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express');
const cors = require('cors');
const path = require('path');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();
const port = process.env.PORT || 8000;

const whitelist = ['http://localhost:8000', 'https://moviehub17.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) callback(null, true)
        else callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/movies', movieRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}

module.exports = app;
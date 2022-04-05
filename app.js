const express = require('express');
const cors = require('cors');
const path = require('path');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();
const port = process.env.PORT || 8000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(cors());
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
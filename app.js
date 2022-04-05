const express = require('express');
const cors = require('cors');
const path = require('path');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();

const port = 8000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/movies', movieRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}

module.exports = app;
const express = require('express');
const cors = require('cors');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();

const port = 8000;

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.use(cors());

app.use('/api/movies', movieRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}

module.exports = app;
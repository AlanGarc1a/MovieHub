const express = require('express');
const cors = require('cors');
const movieRoutes = require('./backend/routes/movieRoutes')
const app = express();

const port = 8000;

app.use(cors());

app.use('/api/movies', movieRoutes);

app.listen(port, () => {
    console.log('Listening on port 8000');
})
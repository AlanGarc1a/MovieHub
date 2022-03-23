const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.json(response.data);
    }).catch(error => {
        console.log(error);
    })
});

router.get('/popularMovies', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.json(response.data);
    }).catch(error => {
        console.log(error);
    })
});

router.get('/popularTVShows', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/upcomingMovies', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/movie/search/:term', (req, res) => {
    const { term } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_MOVIE_API_KEY}/${term}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/show/search/:term', (req, res) => {
    const { term } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_MOVIE_API_KEY}/${term}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/:movieId', (req, res) => {
    const { movieId } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_MOVIE_API_KEY}/${movieId}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/trailer/:movieId', (req, res) => {
    const { movieId } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Trailer/${process.env.REACT_APP_MOVIE_API_KEY}/${movieId}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(error => {
        console.log(error);
    });
});


module.exports = router;
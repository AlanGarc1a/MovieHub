const request = require('supertest');
const app = require('../app');

describe('API movie routes', () => {
    it('should return a status code of 200 and list of movies', async () => {
        const res = await request(app).get("/api/movies/");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res._body.items.length).toBe(250);
    });

    it('GET /popularMovies', async () => {
        const res = await request(app).get("/api/movies/popularMovies");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
        expect(res._body.items.length).toBe(100);
    });

    it('GET /popularTVShows', async () => {
        const res = await request(app).get("/api/movies/");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
        expect(res._body.items.length).toBe(250);
    });

    it('GET /upcomingMovies', async () => {
        const res = await request(app).get("/api/movies/upcomingMovies");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });

    it('GET /movie/search', async () => {
        const res = await request(app).get("/api/movies/movie/search/tt1375666");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });

    it('GET /show/search', async () => {
        const res = await request(app).get("/api/movies/show/search/tt1375666");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });

    it('GET /movie with id', async () => {
        const res = await request(app).get("/api/movies/tt1375666");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });

    it('GET /trailer with id', async () => {
        const res = await request(app).get("/api/movies/trailer/tt1375666");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });

    it('GET /wiki page with id', async () => {
        const res = await request(app).get("/api/movies/wiki/tt1375666");
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
        expect(res.status).toBe(200);
    });
});
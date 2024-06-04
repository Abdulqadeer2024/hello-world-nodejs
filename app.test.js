const request = require('supertest');
const app = require('./app'); // Ensure this path is correct for your app

describe('GET /', () => {
    it('responds with Hello World', (done) => {
        request(app)
            .get('/')
            .expect('Hello World', done);
    });
});

const request = require('supertest');
const app = require('./app'); // Your Express app

describe('GET /', () => {
    it('responds with Hello World', (done) => {
        request(app)
            .get('/')
            .expect('Hello World', done);
    });
});


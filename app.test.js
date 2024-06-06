const request = require('supertest');
const app = require('./app');
const mongoose = require('mongoose');

// Setup and teardown for MongoDB
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test_blog', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('Blog API', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/posts')
            .send({
                title: 'Test Post',
                content: 'This is a test post'
            })
            .expect(201);

        expect(res.text).toEqual('Post created');
    });

    it('should retrieve all posts', async () => {
        await request(app)
            .get('/posts')
            .expect(200);
    });
});

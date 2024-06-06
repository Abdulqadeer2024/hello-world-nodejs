const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema for blog posts
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Blog!');
});

// Create a post
app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).send('Post created');
});

// Get all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
});

module.exports = app;

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

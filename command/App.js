const Invoker = require('./Invoker');
const db = require('./Database');
const Post = require('./Post');
const View = require('./View');
const Update = require('./Update');

const blog = new Invoker(db);

const newPost = new Post(
    'My first post',
    'Hello everyone! This is my first post!');
blog.execute(newPost);

const secondPost = new Post(
    'Design Patterns with Node.js',
    'I hope this course can be useful for you.');
blog.execute(secondPost);

// blog.undo();
blog.execute(new Update('My first post', 'Changed Content!'));
blog.undo();
blog.execute(new View());

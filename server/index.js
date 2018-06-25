const express = require('express');
// const http = require('http');

// const serverr = http.createServer();

const server = express();

server.use(express.json());

server.use((req, res, next) => {
    console.log("A new user has entered the system");

   next();
});

server.get('/', (req, res) => {
   res.status(200).send('Hello world');
});

server.get('/user/:id', (req, res) => {
   res.status(200).send('Trying to get user with id' + req.params.id);
});

server.delete('/user/:id', (req, res) => {
    res.status(200).send('deleted user with id' + req.params.id);
});

server.get('/user', (req, res) => {
    res.status(200).send('Get user from the database: ');
});

server.post('/user', (req, res) => {
    res.status(200).send('Created user in the database');
});

server.put('/user', (req, res) => {
    res.status(200).send('Created user in the database without creating the same resource multiple times.');
});

server.listen(3000);
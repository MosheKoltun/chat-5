// helpers = require("./helpers.ts");
// userFuncs = require('../Modules/users');
//
// const express = require('express');
// // const http = require('http');
// const cors = require('cors');

import * as  express from  'express';
// const http = require('http');
import * as cors from 'cors';

import * as userFuncs from '../Modules/users';
import * as helpers from "./helpers";
import * as fs from "fs";
// const serverr = http.createServer();

const server = express();

server.use(express.json());

server.use(cors());

server.use((req, res, next) => {
    console.log("A new user has entered the system");

   next();
});

// server.get('/', (req, res) => {
//    res.status(200).send('Hello world');
// });
//
// server.get('/user/:id', (req, res) => {
//    res.status(200).send('Trying to get user with id' + req.params.id);
// });


// server.get('/user', (req, res) => {
//     res.status(200).send('Get user from the database: ');
// });

server.post('/sign_in', (req, res) => {
    const result = helpers.verifyUsernameAndPassword(req.body['username'] ,req.body['password']);
    if (result === true) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

server.post('/sign_up', (req, res) => {
    const result = userFuncs.createNewUser(req.body['username'], req.body['password'], req.body['age']);
    console.log("test")
    if (result !== null) {
        const fileContent = fs.readFileSync(__dirname + '/../mock-DB/tree-data.json', 'utf8');
        const myJson = JSON.parse(fileContent);
        console.log(JSON.stringify(myJson));
        res.status(200).send(myJson);
    } else {
        res.sendStatus(500);
    }});

// server.put('/user', (req, res) => {
//     res.status(200).send('Created user in the database without creating the same resource multiple times.');
// });

server.listen(3001);

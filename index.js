/*
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    databese: 'otus-courses',
    password: 'root',
    port: '5432'
});
*/

import express from 'express';
import * as http from 'http';
import WebSocket from 'ws';
import PG from 'pg';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHandler, updateHandler } from './src/utils.js';

// connect to database
const Client = PG.Client;
const connectionString = 'postgressql://postgres:root@localhost:5432/otus-courses';
const client = new Client({
    connectionString: connectionString
});
client.connect();

// static content
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const app = express();
app.use("/", express.static(__dirname + '/front-end/build'));


// rest api
const server = http.createServer(app);
app.listen(3000, () => console.log('Express server listening on 3000'));
server.listen(8888);

// websocket api
const webSocketServer = new WebSocket.Server({ server });
const sendMessages = async  (ws, count = 1) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready"), 3000)
    });
    
    await promise;
    ws.send(`hello from server ${count} time`);
    sendMessages(ws, count + 1);
};

webSocketServer.on('connection', ws => {
    console.log('ws connection ready');
    sendMessages(ws);
    ws.on('message', m => {
        console.log(m);
        webSocketServer.clients.forEach(client => client.send('we got it' + m));
    });
    ws.on("error", e => ws.send(e));
    ws.send('Hi there, I am a WebSocket server');
});


app.get("/update", function(req, res, next) {
    updateHandler(webSocketServer, client);
    res.send('done');
});

app.get("/create", function(req, res, next) {
    createHandler(webSocketServer, client);
    res.send('done');
});


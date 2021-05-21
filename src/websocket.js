import WebSocket from 'ws';
import * as http from 'http';

export const initWebSocketServer = (app) => {
    const wsPort = process.env.WS_PORT
    const server = http.createServer(app);
    server.listen(wsPort);

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
        //sendMessages(ws);
        ws.on("error", e => ws.send(e));
        ws.send('Hi there, I am a WebSocket server');
    });
    return webSocketServer;
}

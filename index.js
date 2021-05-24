import { getPointsHandler, addNewPointHandler } from './src/utils.js';
import { initWebSocketServer } from './src/websocket.js';
import { initApiServer } from './src/apiServer.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import PG from 'pg';
dotenv.config();

// -----config-------------------------------------------------
// секретный токен
const pgPass = process.env.POSTGRES_PASSWORD;
const pgUser = process.env.POSTGRES_USER;
const pgHost = process.env.POSTGRES_HOST;
const pgPort = process.env.POSTGRES_PORT;
const pgDb = process.env.POSTGRES_DB;
const token = process.env.TOKEN;
const envLogin = process.env.LOGIN;
const envPass = process.env.PASSWORD;
// --------------------------------------------------------------
// static content
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

// connect to database
// 'postgressql://postgres:root@localhost:5432/otus-courses';
const Client = PG.Client;
const connectionString = `postgressql://${pgUser}:${pgPass}@${pgHost}:${pgPort}/${pgDb}`;
const client = new Client({
    connectionString: process.env.DATABASE_URL || connectionString,
    ssl: process.env.DATABASE_URL ? true : false
});
client.connect();

// rest api && websocket server
const app = initApiServer(__dirname);
const webSocketServer = initWebSocketServer(app);

// авторизация
app.post("/api/authorization", (req, res) => {
    const {login, password} = req.body;
    console.log(login, password);
    if (login !== envLogin || password !== envPass) {
        res.status(401);
        res.send('Current password does not match');
    } else {
        res.send({token});
    }
});
// проверка авторизации
app.use(function (req, res, next) {
    const reqToken = req.get('token');
    if (!reqToken || reqToken !== token) {
        res.status(401);
        return res.send('Please log in');
    }
    next();
});

app.post("/api/addpoint", (req, res) => {
    const {lat, lng, carId } = req.body;
    const id = +new Date();

    const newPoint = {id, lat, lng, carId, date: new Date()};
    addNewPointHandler(webSocketServer, client, newPoint, res);
});

app.get("/api/get", function(req, res) {
    getPointsHandler(client, res);
});


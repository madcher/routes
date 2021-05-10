import express from 'express';

export const initApiServer = (__dirname ) => {
    const apiPort = process.env.PORT;
    const app = express();

    // json парсер
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }))
    app.listen(apiPort, () => console.log(`Express server listening on ${apiPort}`));

    // static content
    app.use("/", express.static(__dirname + '/front-end/build'));

    return app;
}

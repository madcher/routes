export const addNewPointHandler = async (wsServer, client, point, res) => {
    const {id, carId, lat, lng, date} = point;
    let data;
    try {
        data = await client.query(
            'INSERT into routes (id, carid, lat, lng, datetime) VALUES($1, $2, $3, $4, $5) RETURNING *', 
            [id, carId, lat, lng, date]);
    } catch (e) {
        console.log(e);
        res.send('error db');
        return;
    }
    console.log('done');
    wsServer.clients.forEach(client => client.send('update data'));
    res.send('done')
}

export const getPointsHandler = async (wsServer, client) => {
    let data;
    try {
        data = await client.query('SELECT * FROM routes');
    } catch (e) {
        console.log(e);
        res.send('error db');
        return;
    }
    console.log(Object.values(data.rows[0]));
    wsServer.clients.forEach(client => client.send('update data'));
}


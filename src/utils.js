export const updateHandler = async (wsServer, client) => {
    const data = await client.query('SELECT * FROM courses');
    console.log(data.rows)
    wsServer.clients.forEach(client => client.send('update done'));
}

export const createHandler = async (wsServer, client) => {
    const data = await client.query('SELECT * FROM courses');
    console.log(data.rows)
    wsServer.clients.forEach(client => client.send('update done'));
}
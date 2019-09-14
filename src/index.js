'use strict';

const server = require('./server');
const configs = require('./config');

const startServer = async () => {
    try {
        const { db: { host, port } } = configs;

        const app = await server({ host, port });

        await app.start();

        console.log(`Server running at http://${host}:${port}`);
    } catch (err) {
        console.log('Failed starting server: %o', err);
        
    }
};

startServer();
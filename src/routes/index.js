'use strict';

module.exports.register = async server => {
    server.route({
        method: 'GET',
        path: '/',
        options: {
            auth: 'simple'
        },
        handler: async (request, h) => {
            return 'My first hapi server!';
        }
    });
}
'use strict';

const BasicAuth = require('@hapi/basic');
const Bcrypt = require('bcryptjs');

// hardcode a users object for demo purpose
const users = {
  demo: {
    id: '1',
    username: 'demo',
    password: '$2y$12$SKgzKD8xtHKYfgwhq0jB5ubR/ayZ5uTapGxeVhhpeNT/ud0tSRVPO' // demo
  }
}

const validate = async (request, username, password, h) => {
  const user = users[username];
  if (!user) {
    return {
      credentials: null,
      isValid: false
    };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = {
    id: user.id,
    name: user.name
  };

  return {
    isValid,
    credentials
  };
};

module.exports.register = async server => {
  await server.register([BasicAuth]);

  server.auth.strategy('simple', 'basic', {
    validate
  })
}
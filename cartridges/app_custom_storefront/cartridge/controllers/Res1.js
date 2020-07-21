var server = require('server');

server.get('Show', function(req, res, next) {
    res.json({ saludo: 'Hello World' });
    next();
});

module.exports = server.exports();
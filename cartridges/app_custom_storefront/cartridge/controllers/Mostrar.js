'use strict';

var server = require('server');

server.get('Unidad', function(req, res, next) {
    res.render('/exercises/kilos');

    next();
});

module.exports = server.exports();
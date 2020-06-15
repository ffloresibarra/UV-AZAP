'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');

server.get('World', cache.applyDefaultCache, function(req, res, next) {
    res.render('exercises/templateController', {
        Message: 'Hello World! Again.'
    });

    next();
});

module.exports = server.exports();
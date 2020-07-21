'use strict';

var server = require('server');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');


server.get('Show', cache.applyDefaultCache, function(req, res, next) {
    var a = [{
            nombre: 'Francisco',
            apellido: 'Flores'
        },
        {
            nombre: 'Alejandro',
            apellido: 'Flores'
        },
        {
            nombre: 'Enedina',
            apellido: 'Ibarra'
        },
        {
            nombre: 'Prisciliano',
            apellido: 'Flores'
        },

    ];

    res.render("/exercises/tags", { viewData: a });
    next();
});

module.exports = server.exports();
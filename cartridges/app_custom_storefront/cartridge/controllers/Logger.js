'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');

// var debugLog = Logger.getLogger("123debug123", "customDebug");
// debugLog.debug("This is the first category a debug");

// var warnLog = Logger.getLogger("123warn123", "customWarn");
// warnLog.warn("This is the second category a warn");

// var errorLog = Logger.getLogger("123error123", "customError");
// errorLog.error("This is the third category an error");

// var infoLog = Logger.getLogger("info123Francisco", "customINFO");
// infoLog.info("This the fourth category an info");

// var Log = Logger.debug("Prueba del Logger sin prefix y category otra vez");

var logger = Logger.getLogger("loggerFile", "category1.eu");
logger.warn("This is a log message");

server.get('Show', function(req, res, next) {
    res.render('/exercises/logRender', {
        myProduct: logger
    });
    next();
});

module.exports = server.exports();
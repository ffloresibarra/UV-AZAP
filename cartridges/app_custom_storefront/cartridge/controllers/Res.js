var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

server.get('Show',
    server.middleware.get,
    cache.applyPromotionSensitiveCache,
    consentTracking.consent,
    function(req, res, next) {
        res.render('exercises/res/res', { saludo: 'Hello World' });
        next();
    }, pageMetaData.computedPageMetaData);

module.exports = server.exports();
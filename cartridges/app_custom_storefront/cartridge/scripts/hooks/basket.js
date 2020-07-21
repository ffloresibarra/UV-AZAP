importPackage(dw.system);

exports.modifyGETResponse = function(basket, atributo) {
    atributo.basket_id = "GETResponse";

    return new Status(Status.OK);
}

exports.beforePATCH = function(basket, atributo) {
    atributo.UUID = "beforePATCH";

    return new Status(Status.OK);
}
exports.beforePOST = function(basket, atributo) {
    atributo.UUID = "beforePATCH";

    return new Status(Status.OK);
}
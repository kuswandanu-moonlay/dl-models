require("should");
var FPReturFromBuyerDocItem= require("./fp-retur-fr-byr-doc-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceof(Object);

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceof(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        FPReturFromBuyerDocItem(item);
    }

};
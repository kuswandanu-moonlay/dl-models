require("should");
var validateShipmentDocumentItem = require("./fp-shipment-document-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    //Production Order detail
    data.should.have.property('productionOrderId');
    data.productionOrderId.should.instanceof(Object);

    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.instanceof(String);

    data.should.have.property('productionOrderType');
    data.productionOrderType.should.be.String();

    //
    data.should.have.property('designCode');
    data.designCode.should.instanceOf(String);

    data.should.have.property('designNumber');
    data.designNumber.should.instanceOf(String);

    data.should.have.property('colorType');
    data.colorType.should.instanceOf(String);

    //Products list
    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateShipmentDocumentItem(item);
    }
};
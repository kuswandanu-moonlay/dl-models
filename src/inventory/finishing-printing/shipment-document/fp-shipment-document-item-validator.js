require("should");

var validateShipmentDocumentPackingReceiptItem = require("./fp-shipment-document-packing-receipt-item-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('packingReceiptId');
    data.packingReceiptId.should.instanceof(Object);

    data.should.have.property('packingReceiptCode');
    data.packingReceiptCode.should.instanceof(String);

    //
    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storageCode');
    data.storageCode.should.instanceof(String);

    data.should.have.property('storageName');
    data.storageName.should.instanceof(String);

    //
    data.should.have.property('referenceNo');
    data.referenceNo.should.instanceof(String);

    data.should.have.property('referenceType');
    data.referenceType.should.instanceof(String);

    data.should.have.property('packingReceiptItems');
    data.packingReceiptItems.should.instanceOf(Array);
    for (var packingReceiptItem of data.packingReceiptItems) {
        validateShipmentDocumentPackingReceiptItem(packingReceiptItem);
    }
};
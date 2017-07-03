require("should");
var validatePackingReceiptItem = require("./fp-packing-receipt-items-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Object);

    data.should.have.property('packingId');
    data.packingId.should.instanceof(Object);

    data.should.have.property('packingCode');
    data.packingCode.should.be.String();

    data.should.have.property('remark');
    data.remark.should.be.String();

    data.should.have.property('accepted');
    data.accepted.should.instanceof(Boolean);

    data.should.have.property('declined');
    data.declined.should.instanceof(Boolean);

    //Inventory Document Validation
    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('referenceNo');
    data.referenceNo.should.instanceof(String);

    data.should.have.property('referenceType');
    data.referenceType.should.instanceof(String);

    data.should.have.property('type');
    data.type.should.instanceof(String);


    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.be.String();

    data.should.have.property('buyer');
    data.buyer.should.be.String();

    data.should.have.property('colorName');
    data.colorName.should.be.String();

    data.should.have.property('construction');
    data.construction.should.be.String();

    data.should.have.property('items');
    data.items.should.instanceof(Array);

    data.should.have.property('packingUom');
    data.packingUom.should.be.String();

    data.should.have.property('orderType');
    data.orderType.should.be.String();

    data.should.have.property('colorType');
    data.colorType.should.be.String();

    data.should.have.property('designCode');
    data.designCode.should.be.String();

    data.should.have.property('designNumber');
    data.designNumber.should.be.String();

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePackingReceiptItem(item);
    }

};
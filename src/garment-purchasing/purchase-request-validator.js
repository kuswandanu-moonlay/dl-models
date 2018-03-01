require("should");
var validatePurchaseRequestItem = require('./purchase-request-item-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('no');
    data.no.should.instanceof(String);

    data.should.have.property('roNo');
    data.roNo.should.instanceof(String);

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);

    data.should.have.property('artikel');
    data.artikel.should.instanceof(String);

    data.should.have.property('date');
    data.date.should.instanceof(Date);
    
    data.should.have.property('expectedDeliveryDate');
    data.expectedDeliveryDate.should.instanceof(Date);
    
    data.should.have.property('shipmentDate');
    data.shipmentDate.should.instanceof(Date);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isUsed');
    data.isUsed.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);


    data.should.have.property('items');
    data.items.should.instanceof(Array); 

    for (var item of data.items) {
        validatePurchaseRequestItem(item);
    }

    data.should.have.property('status');
    data.status.should.instanceof(Object);
};
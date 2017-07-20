require("should");
var validatePurchaseOrderItem = require('./purchase-order-item-validator');
var validateBuyer = require('../master/buyer-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('no');
    data.no.should.be.String();

    data.should.have.property('refNo');
    data.refNo.should.be.String();

    data.should.have.property('iso');
    data.iso.should.be.String();

    data.should.have.property('roNo');
    data.roNo.should.be.String();

    data.should.have.property('buyer');
    data.buyer.should.instanceof(Object);

    data.should.have.property('artikel');
    data.artikel.should.be.String();

    data.should.have.property('purchaseRequestId');
    data.purchaseRequestId.should.instanceof(Object);

    data.should.have.property('purchaseRequest');
    data.purchaseRequest.should.instanceof(Object);

    // data.should.have.property('buyerId');
    // data.buyerId.should.instanceof(Object);

    // data.should.have.property('buyer');
    // data.buyer.should.instanceof(Object);
    // validateBuyer(data.buyer);

    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('expectedDeliveryDate');
    data.expectedDeliveryDate.should.instanceof(Date);

    data.should.have.property('actualDeliveryDate');
    data.actualDeliveryDate.should.instanceof(Date);

    data.should.have.property('shipmentDate');
    data.shipmentDate.should.instanceof(Date);

    data.should.have.property('isPosted');
    data.isPosted.should.instanceOf(Boolean);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validatePurchaseOrderItem(item);
    }

    data.should.have.property('status');
    data.status.should.instanceof(Object);
};
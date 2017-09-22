require("should");
var validateDeliveryOrderItemFulfillment = require('./delivery-order-item-fulfillment-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderExternalNo');
    data.purchaseOrderExternalNo.should.be.String();

    data.should.have.property('paymentMethod');
    data.paymentMethod.should.instanceOf(String);

    data.should.have.property('paymentType');
    data.paymentType.should.instanceOf(String);

    data.should.have.property('paymentDueDays');
    data.paymentDueDays.should.instanceOf(Number);

    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('fulfillments');
    data.fulfillments.should.instanceOf(Array);
    for (var item of data.fulfillments) {
        validateDeliveryOrderItemFulfillment(item);
    }
};
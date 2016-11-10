require("should");
var validatePurchaseOrderExternal = require('../purchasing/purchase-order-external-validator');
var validateDeliveryOrderItemFulfillment = require('../purchasing/delivery-order-item-fulfillment-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceOf(Object);
    validatePurchaseOrderExternal(data.purchaseOrderExternal);
    
    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('fulfillments');
    data.fulfillments.should.instanceOf(Array);
    for (var item of data.fulfillments) {
        validateDeliveryOrderItemFulfillment(item);
    }
}
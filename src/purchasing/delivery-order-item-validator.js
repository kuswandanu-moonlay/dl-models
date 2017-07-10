require("should");
var validateDeliveryOrderItemFulfillment = require('../purchasing/delivery-order-item-fulfillment-validator');
var validateDeliveryOrderItemPurchaseOrder = require('../purchasing/delivery-order-item-purchase-order-validator');

module.exports = function (data) {
    data.should.have.property('purchaseOrderExternalId');
    data.purchaseOrderExternalId.should.instanceOf(Object);

    data.should.have.property('purchaseOrderExternal');
    data.purchaseOrderExternal.should.instanceOf(Object);
    
    data.purchaseOrderExternal.should.have.property('no');
    data.purchaseOrderExternal.no.should.be.String();

    data.purchaseOrderExternal.should.have.property('items');
    data.purchaseOrderExternal.items.should.instanceOf(Array);
    for (var item of data.purchaseOrderExternal.items) {
        validateDeliveryOrderItemPurchaseOrder(item);
    }
    
    data.should.have.property('isClosed');
    data.isClosed.should.instanceOf(Boolean);

    data.should.have.property('fulfillments');
    data.fulfillments.should.instanceOf(Array);
    for (var item of data.fulfillments) {
        validateDeliveryOrderItemFulfillment(item);
    }
};
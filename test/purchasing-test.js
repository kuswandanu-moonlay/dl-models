var validate = require('../src/validator').purchasing;

it("#01. Purchase Order External should valid", function() {
    var PurchaseOrderExternal = require('../src/purchasing/purchase-order-external');
    validate.purchaseOrderExternal(new PurchaseOrderExternal());
});

it("#02. Purchase Order should valid", function () {
    var PurchaseOrder = require('../src/purchasing/purchase-order');
    validate.purchaseOrder(new PurchaseOrder());
});

it("#03. Delivery Order should valid", function () {
    var DeliveryOrder = require('../src/purchasing/delivery-order');
    validate.deliveryOrder(new DeliveryOrder());
});


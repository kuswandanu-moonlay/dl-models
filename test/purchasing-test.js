var validate = require('../src/validator').purchasing;

it("#01. Purchase Request should valid", function() {
    var PurchaseRequest = require('../src/purchasing/purchase-request');
    validate.purchaseRequest(new PurchaseRequest());
});

it("#02. Purchase Order should valid", function () {
    var PurchaseOrder = require('../src/purchasing/purchase-order');
    validate.purchaseOrder(new PurchaseOrder());
});

it("#03. Purchase Order External should valid", function() {
    var PurchaseOrderExternal = require('../src/purchasing/purchase-order-external');
    validate.purchaseOrderExternal(new PurchaseOrderExternal());
});

it("#04. Delivery Order should valid", function () {
    var DeliveryOrder = require('../src/purchasing/delivery-order');
    validate.deliveryOrder(new DeliveryOrder());
});

it("#05. Unit Receipt Note should valid", function () {
    var UnitReceiptNote = require('../src/purchasing/unit-receipt-note');
    validate.unitReceiptNote(new UnitReceiptNote());
}); 
 
it("#06. Unit Payment Correction Note should valid", function () {
    var unitPaymentCorrectionNote = require('../src/purchasing/unit-payment-correction-note');
    validate.unitPaymentCorrectionNote(new unitPaymentCorrectionNote());
});

it("#07. Unit Payment Order should valid", function () {
    var UnitPaymentOrder = require('../src/purchasing/unit-payment-order');
    validate.UnitPaymentOrder(new UnitPaymentOrder());
});

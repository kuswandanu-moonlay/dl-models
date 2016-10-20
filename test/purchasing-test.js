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

it("#04. Unit Receipt Note should valid", function () {
    var UnitReceiptNote = require('../src/purchasing/unit-receipt-note');
    validate.unitReceiptNote(new UnitReceiptNote());
});

it("#05. Unit Payment Price Correction Note should valid", function () {
    var UnitPaymentPriceCorrectionNoteItem = require('../src/purchasing/unit-payment-price-correction-note');
    validate.unitPaymentPriceCorrectionNoteItem(new UnitPaymentPriceCorrectionNoteItem());
});

it("#06. Unit Payment Order should valid", function () {
    var UnitPaymentOrder = require('../src/purchasing/unit-payment-order');
    validate.UnitPaymentOrder(new UnitPaymentOrder());
});

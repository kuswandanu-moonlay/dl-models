var validate = require('../src/validator').garmentPurchasing;

it("#01. Purchase Request should valid", function() {
    var PurchaseRequest = require('../src/garment-purchasing/purchase-request');
    validate.garmentPurchaseRequest(new PurchaseRequest());
});

it("#02. Purchase Order should valid", function () {
    var PurchaseOrder = require('../src/garment-purchasing/purchase-order');
    validate.garmentPurchaseOrder(new PurchaseOrder());
});

it("#03. Customs should valid", function () {
    var Customs = require('../src/garment-purchasing/customs');
    validate.customs(new Customs());
});

// it("#03. Purchase Order External should valid", function() {
//     var PurchaseOrderExternal = require('../src/purchasing/purchase-order-external');
//     validate.purchaseOrderExternal(new PurchaseOrderExternal());
// });

// it("#04. Delivery Order should valid", function () {
//     var DeliveryOrder = require('../src/purchasing/delivery-order');
//     validate.deliveryOrder(new DeliveryOrder());
// });

// it("#05. Unit Receipt Note should valid", function () {
//     var UnitReceiptNote = require('../src/purchasing/unit-receipt-note');
//     validate.unitReceiptNote(new UnitReceiptNote());
// }); 
 
// it("#06. Unit Payment Correction Note should valid", function () {
//     var unitPaymentCorrectionNote = require('../src/purchasing/unit-payment-correction-note');
//     validate.unitPaymentCorrectionNote(new unitPaymentCorrectionNote());
// });

// it("#07. Unit Payment Order should valid", function () {
//     var UnitPaymentOrder = require('../src/purchasing/unit-payment-order');
//     validate.UnitPaymentOrder(new UnitPaymentOrder());
// });

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

it("#04. Purchase Order External should valid", function() {
    var PurchaseOrderExternal = require('../src/garment-purchasing/purchase-order-external');
    validate.garmentPurchaseOrderExternal(new PurchaseOrderExternal());
});

it("#04. Delivery Order should valid", function () {
    var DeliveryOrder = require('../src/garment-purchasing/delivery-order');
    validate.garmentDeliveryOrder(new DeliveryOrder());
});

it("#05. Invoice Note should valid", function () {
    var InvoiceNote = require('../src/garment-purchasing/invoice-note');
    validate.garmentInvoiceNote(new InvoiceNote());
});

it("#06. Garment Purchase Correction should valid", function () {
    var GarmentPurchaseCorrection = require('../src/garment-purchasing/garment-purchase-correction');
    validate.garmentPurchaseCorrection(new GarmentPurchaseCorrection());
});

it("#07. Unit Receipt Note should valid", function () {
    var UnitReceiptNote = require('../src/garment-purchasing/unit-receipt-note');
    validate.garmentUnitReceiptNote(new UnitReceiptNote());
}); 

it("#08. Intern Note should valid", function () {
    var InternNote = require('../src/garment-purchasing/intern-note');
    validate.garmentInternNote(new InternNote());
});
it("#09. garment currency should valid", function () {
    var GarmentCurrency = require('../src/garment-purchasing/garment-currency');
    validate.garmentCurrency(new GarmentCurrency());
});

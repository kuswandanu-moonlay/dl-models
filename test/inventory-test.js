var validate = require('../src/validator').inventory;

it("#01. finishing-printing/inventory-movement should valid", function() {
    var FPInventoryMovement = require('../src/inventory/finishing-printing/fp-inventory-movement');
    validate.finishingPrinting.fpInventoryMovement(new FPInventoryMovement());
});

it("#02. finishing-printing/inventory-summary should valid", function () {
    var FPInventorySummary = require('../src/inventory/finishing-printing/fp-inventory-summary');
    validate.finishingPrinting.fpInventorySummary(new FPInventorySummary());
});

it("#03. finishing-printing/packing-receipt should valid", function () {
    var FPPackingReceipt = require('../src/inventory/finishing-printing/fp-packing-receipt');
    validate.finishingPrinting.fpPackingReceipt(new FPPackingReceipt());
});
 
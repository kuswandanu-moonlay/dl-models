var validate = require('../src/validator').inventory;

it("#01. finishing-printing/inventory-movement should valid", function () {
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

it("#04. inventory-movement should valid", function () {
    var InventoryMovement = require('../src/inventory/inventory-movement');
    validate.inventoryMovement(new InventoryMovement());
});

it("#05. inventory-summary should valid", function () {
    var InventorySummary = require('../src/inventory/inventory-summary');
    validate.inventorySummary(new InventorySummary());
});

it("#06. inventory document should valid", function () {
    var InventoryDocument = require('../src/inventory/inventory-document');
    validate.inventoryDocument(new InventoryDocument());
});

it("#07. finishing printing shipment document should valid", function () {
    var FinishingPrintingShipmentDocument = require('../src/inventory/finishing-printing/shipment-document/fp-shipment-document');
    validate.finishingPrinting.fpShipmentDocument(new FinishingPrintingShipmentDocument());
});

it("#08. finishing-printing/retur-to-qc should valid", function () {
    var FPReturToQCDoc = require('../src/inventory/finishing-printing/retur-to-qc-doc/fp-retur-to-qc-doc');
    validate.finishingPrinting.fpReturToQCDoc(new FPReturToQCDoc());
});

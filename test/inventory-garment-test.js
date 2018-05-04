var validate = require('../src/validator').garmentInventory;

it("#01. garment-inventory-movement should valid", function () {
    var GarmentInventoryMovement = require('../src/inventory-garment/garment-inventory-movement');
    validate.garmentInventoryMovement(new GarmentInventoryMovement());
});

it("#02. garment-inventory-summary should valid", function () {
    var GarmentInventorySummary = require('../src/inventory-garment/garment-inventory-summary');
    validate.garmentInventorySummary(new GarmentInventorySummary());
});

it("#03. garment-inventory document should valid", function () {
    var GarmentInventoryDocument = require('../src/inventory-garment/garment-inventory-document');
    validate.garmentInventoryDocument(new GarmentInventoryDocument());
});
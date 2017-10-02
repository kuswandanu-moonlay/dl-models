var validate = require('../src/validator').inventoryTextile;

it("#01. inventory document should valid", function () {
    var TextileInventoryDocument = require('../src/inventory-textile/textile-inventory-document');
    validate.textileInventoryDocument(new TextileInventoryDocument());
});

it("#02. inventory-movement should valid", function () {
    var TextileInventoryMovement = require('../src/inventory-textile/textile-inventory-movement');
    validate.textileInventoryMovement(new TextileInventoryMovement());
});

it("#03. inventory-summary should valid", function () {
    var TextileInventorySummary = require('../src/inventory-textile/textile-inventory-summary');
    validate.textileInventorySummary(new TextileInventorySummary());
});

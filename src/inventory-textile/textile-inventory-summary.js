'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class TextileInventorySummary extends BaseModel {
    constructor(source) {
        super('textile-inventory-summary', '1.0.0');

        // Define properties.
        this.code="";
        this.productId = {};
        this.productCode = "";
        this.productName = "";

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.quantity = 0;
        this.uomId = {};
        this.uom = "";

        this.remark = "";

        this.copy(source);
    }
};

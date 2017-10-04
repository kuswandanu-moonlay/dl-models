'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../master/uom");

module.exports = class GarmentInventorySummary extends BaseModel {
    constructor(source) {
        super('garment-inventory-summary', '1.0.0');

        // Define properties.
        this.code='';
        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";
        this.productId = {};
        this.productCode = "";
        this.productName = "";
        this.quantity = 0;
        this.uomId = {};
        this.uom = "";
        this.remark ='';
        this.copy(source);
    }
};

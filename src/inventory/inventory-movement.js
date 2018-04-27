'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class InventoryMovement extends BaseModel {
    constructor(source) {
        super('inventory-movement', '1.0.0');

        // Define properties.
        this.code = '';
        this.referenceNo = '';
        this.referenceType = '';
        this.date = new Date();
         
        this.productId = {};
        this.productCode = "";
        this.productName = "";

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";
        this.stockPlanning = 0;
        this.before = 0;
        // this.secondBefore = 0;
        // this.thirdBefore = 0;
        this.quantity = 0;
        // this.secondQuantity = 0;
        // this.thirdQuantity = 0;
        this.after = 0;
        // this.secondAfter = 0;
        // this.thirdAfter = 0;
        
        this.uomId = {};
        this.uom = "";
        // this.secondUomId = {};
        // this.secondUom = "";
        // this.thirdUomId = {};
        // this.thirdUom = "";
        
        this.remark = '';
        this.type = '';

        this.copy(source);
    }
};

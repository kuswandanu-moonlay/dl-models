'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class TextileInventoryMovement extends BaseModel {
    constructor(source) {
        super('textile-inventory-movement', '1.0.0');

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
        
        this.before = 0;
        this.quantity = 0;
        this.after = 0;
        
        this.uomId = {};
        this.uom = "";
        
        this.remark = '';
        this.type = '';

        this.copy(source);
    }
};

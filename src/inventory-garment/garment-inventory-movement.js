'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class GarmentInventoryMovement extends BaseModel {
    constructor(source) {
        super('inventory-garment-document', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.referenceNo = '';
        this.referenceType = '';
        
        this.type = ''; // IN, OUT, RET-IN, RET-OUT

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";
        this.productId="";
        this.productCode="";
        this.productName="";
        this.before =0;
        this.quantity =0;
        this.after =0;
        this.uomId ='';
        this.uom ='';
        this.remark = '';

        this.copy(source);

    }
};

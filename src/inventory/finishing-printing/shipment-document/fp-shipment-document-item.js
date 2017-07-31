'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ShipmentDocumentItem extends BaseModel {
    constructor(source) {
        super('shipment-document-item', '1.0.0');

        //Product detail
        this.productId = "";
        this.productCode = "";
        this.productName = "";

        this.designCode = "";
        this.designNumber = "";
        this.colorType = "";

        this.uomId = {};
        this.uomUnit = "";
        
        this.quantity = 0;
        this.length = 0;
        this.weight = 0;

        this.remark = "";

        this.copy(source);
    }
};

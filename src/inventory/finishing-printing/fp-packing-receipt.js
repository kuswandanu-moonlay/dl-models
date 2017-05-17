'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var PackingItemModel = require('./fp-packing-receipt-items');

module.exports = class FPPackingReceipt extends BaseModel {
    constructor(source) {
        super('fp-packing-receipt', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.packingId = {};
        this.packingCode = "";
        this.accepted = false;
        this.declined = false;
        this.remark = "";

        this.productionOrderNo = "";
        this.buyer = "";
        this.colorName = "";
        this.construction = "";
        this.items = [];
        this.packingUom = "";

        this.copy(source);
        this.items = this.items.map((item) => new PackingItemModel(item));
    }
};
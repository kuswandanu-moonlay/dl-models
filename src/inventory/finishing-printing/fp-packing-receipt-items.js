'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class PackingReceiptItem extends BaseModel {
    constructor(source) {
        super('packing-receipt-item', '1.0.0');

        // Define properties.

        this.product = "";
        this.productId = {};
        this.quantity = 0;
        this.length = 0;
        this.weight = 0;
        this.remark = "";
        this.notes = "";
        this.uomId = {};

        this.isDelivered = false;
        this.availableQuantity = 0;

        this.copy(source);
    }
};

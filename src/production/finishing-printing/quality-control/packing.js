'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var PackingItemModel = require("./packing-item");

module.exports = class Packing extends BaseModel {
    constructor(source) {
        super('packing', '1.0.0');

        // Define properties.
        this.code = '';
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.buyer = "";
        this.buyerLocation = "";
        this.date = new Date();
        this.packingUom = "";
        this.colorCode = "";
        this.colorName = "";
        this.construction = "";
        this.motif = "";
        this.items = [];
        this.status = "";
        this.accepted = false;
        this.declined = false;
        this.copy(source);
        this.items = this.items.map(item => new PackingItemModel(item));

    }
};

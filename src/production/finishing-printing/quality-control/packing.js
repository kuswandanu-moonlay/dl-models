'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Packing extends BaseModel {
    constructor(source) {
        super('packing', '1.0.0');

        // Define properties.
        this.code = '';
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.buyer = "";
        this.date = new Date();
        this.packingUom = "";
        this.colorCode = "";
        this.colorName = "";
        this.motif = "";
        this.items = [];
        this.status = "";
        this.accepted = false;
        this.declined = false;
        this.copy(source);

    }
};

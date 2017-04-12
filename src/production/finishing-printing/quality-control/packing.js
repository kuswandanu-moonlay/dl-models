'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Cart extends BaseModel {
    constructor(source) {
        super('packing', '1.0.0');

        // Define properties.
        this.code = '';
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.date = new Date();
        this.packingUom = "";
        this.items = [];
        this.status = "";
        this.accepted = false;
        this.declined = false;
        this.copy(source);

    }
};

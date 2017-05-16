'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class PackingItem extends BaseModel {
    constructor(source) {
        super('packing-item', '1.0.0');

        // Define properties.

        this.product = "";
        this.quantity = 0;
        this.remark = "";
        this.notes = "";
        this.copy(source);
    }
};

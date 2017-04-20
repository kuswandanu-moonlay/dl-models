'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class PackingItem extends BaseModel {
    constructor(source) {
        super('packing-item', '1.0.0');

        // Define properties.

        this.lot = '';
        this.grade = '';
        this.weight = 0;
        this.length = 0;
        this.quantity = 0;
        this.remark = '';
        this.copy(source);
    }
};

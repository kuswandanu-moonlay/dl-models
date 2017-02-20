'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Cart extends BaseModel {
    constructor(source) {
        super('cart', '1.0.0');

        // Define properties.
        this.cartNumber = '';
        this.materialLength = 0;
        this.pcs = 0;
        this.copy(source);
    }
};
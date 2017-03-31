'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../../master/uom");

module.exports = class Cart extends BaseModel {
    constructor(source) {
        super('cart', '1.0.0');

        // Define properties.
        this.code = '';
        this.cartNumber = '';
        this.qty = 0;
        this.pcs = 0;
        this.uomId = {};
        this.uom = new Uom();
        this.copy(source);
    }
};
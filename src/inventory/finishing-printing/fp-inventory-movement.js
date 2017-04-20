'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../../master/uom");

module.exports = class FPInventoryMovement extends BaseModel {
    constructor(source) {
        super('fp-inventory-movement', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.packingId = {},
        this.packingCode = "",
        this.productionOrderId = {};
        this.productionOrderNo = "";
        this.colorCode = "";
        this.colorName = "";
        this.grade = "";
        this.lot = "";
        this.uom = "";
        this.weight = 0;
        this.length = 0;
        this.quantity = 0;
        this.type = "";

        this.copy(source);
    }
};

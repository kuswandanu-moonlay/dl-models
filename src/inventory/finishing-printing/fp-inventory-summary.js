'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../../master/uom");

module.exports = class FPInventorySummary extends BaseModel {
    constructor(source) {
        super('cart', '1.0.0');

        // Define properties.
        this.code = ''; 
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
        
        this.copy(source);
    }
};
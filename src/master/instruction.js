'use strict';

var BaseModel = require('model-toolkit').BaseModel; 
var Product = require('./product');
var OrderType = require('./order-type');
var ColorType = require('./color-type');

module.exports = class Instruction extends BaseModel {
    constructor(source) {
        super('instruction', '1.0.0');
        
        // Define properties.
        this.name = '';
        this.orderTypeId = {};
        this.orderType = new OrderType();
        this.materialId = {};
        this.material = new Product();
        this.construction = '';
        this.colorTypeId = null;
        this.colorType = null;
        this.steps = []; 

        this.copy(source);
    }
};

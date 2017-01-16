'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Product = require('./product');
var ColorType = require('./color-type');
var OrderType = require('./order-type');

module.exports = class Instruction extends BaseModel {
    constructor(source) {
        super('instruction', '1.0.0');
        
        // Define properties.
        this.name = '';
        this.orderTypeId = {};
        this.orderType = new OrderType()
        this.materialId = {}
        this.material = new Product();
        this.construction = '';
        this.colorTypeId = {};
        this.colorType = new ColorType();
        this.steps = []; 

        this.copy(source);
    }
};

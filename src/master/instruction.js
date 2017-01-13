'use strict';

var BaseModel = require('model-toolkit').BaseModel; 
var Product = require('./product');
var OrderType = require('./order-type');
var ColorType = require('./color-type');

module.exports = class instruction extends BaseModel{
    constructor(source){
        super('instruction', '1.0.0');

        this.materialId= {};
        this.material = new Product();

        this.orderTypeId={};
        this.orderType=new OrderType();

        this.colorTypeId={};
        this.colorType=new ColorType();

        this.construction = '';
        this.steps=[];
        
        this.copy(source);
    }
};

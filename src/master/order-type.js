'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class OrderType extends BaseModel{
    constructor(source){
        super('order-type', '1.0.0');
        this.code = '';
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};
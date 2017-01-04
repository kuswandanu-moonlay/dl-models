'use strict';

var BaseModel = require('model-toolkit').BaseModel; 
var OrderType = require('./order-type');

module.exports = class ProcessType extends BaseModel{
    constructor(source){
        super('process-type', '1.0.0');

        this.code = '';
        this.orderTypeId={};
        this.orderType= new OrderType();
        this.name = '';
        this.remark = '';
        this.copy(source);
    }
};
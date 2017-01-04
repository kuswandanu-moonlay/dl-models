'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../../master/uom');

module.exports = class ProductionOrderDetail extends BaseModel {
    constructor(source) {
        super('production-order-detail', '1.0.0');

        this.code='';
        this.colorRequest=''; //warna yang diminta
        this.colorType=''; //Type warna
        this.colorTemplate=''; //acuan warna/desain
        this.quantity=0;
        this.uom=new uom();
        this.copy(source);
    }
};
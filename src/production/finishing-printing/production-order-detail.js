'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../../master/uom');
var ColorType = require('../../master/color-type');

module.exports = class ProductionOrderDetail extends BaseModel {
    constructor(source) {
        super('production-order-detail', '1.0.0');

        this.code='';
        this.colorRequest=''; //warna yang diminta
        this.colorTemplate=''; //acuan warna/desain
        this.colorTypeId={};
        this.colorType=new ColorType();
        this.quantity=0;
        this.uomId={};
        this.uom=new uom();
        this.copy(source);
    }
};
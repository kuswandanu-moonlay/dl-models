'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ColorType = require('../master/color-type');
var Currency = require('../master/currency');

module.exports = class SalesContractDetail extends BaseModel {
    constructor(source) {
        super('sales-contract-detail', '1.0.0');

        this.color=''; 
        this.colorTypeId=null;
        this.colorType=null;
        this.price=0;
        this.currencyId={};
        this.currency=new Currency();
        this.useIncomeTax = false;

        this.copy(source);
    }
};
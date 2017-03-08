'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var ColorType = require('../master/color-type');
var Currency = require('../master/currency');

module.exports = class FinishingPrintingSalesContractDetail extends BaseModel {
    constructor(source) {
        super('finishing-printing-sales-contract-detail', '1.0.0');

        this.color=''; 
        this.price=0;
        this.useIncomeTax = false;
        this.currencyId={};
        this.currency= new Currency();

        this.copy(source);
    }
};
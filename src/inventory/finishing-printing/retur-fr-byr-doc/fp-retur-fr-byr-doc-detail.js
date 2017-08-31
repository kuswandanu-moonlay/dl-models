'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var FPReturFromBuyerDocItem=require("./fp-retur-fr-byr-doc-item");

module.exports = class FPReturFrByrDocDetail extends BaseModel {
    constructor(source) {
        super('fp-retur-fr-byr-doc-detail', '1.0.0');

        // Define properties.

        this.productionOrderNo = '';
        this.productionOrderId = {};
        
        this.items=[];
        this.copy(source);

        this.items = this.items.map((detail) => new FPReturFromBuyerDocItem(detail));
    }
};
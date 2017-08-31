'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class FPReturFrByrItem extends BaseModel {
    constructor(source) {
        super('fp-retur-fr-byr-doc-item', '1.0.0');

        // Define properties.

        this.productId={};
        this.productCode='';
        this.productName='';
        this.productDescription='';
        this.hasNewProduct = false;
        this.designNumber='';
        this.designCode='';
        this.remark='';
        this.colorWay='';
        this.returQuantity=0;
        this.uomId={};
        this.uom='';
        this.length=0;
        this.weight=0;

        this.copy(source);

    }
};
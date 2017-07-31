'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class FPReturToQCDocDetail extends BaseModel {
    constructor(source) {
        super('fp-retur-to-qc-doc-detail', '1.0.0');

        // Define properties.

        this.productId={};
        this.productName='';
        this.designNumber='';
        this.designCode='';
        this.remark='';
        this.colorWay='';
        this.quantityBefore=0;
        this.returQuantity=0;
        this.uomId={};
        this.uom='';
        this.length=0;
        this.weight=0;
        this.storageId={};

        this.copy(source);

    }
};


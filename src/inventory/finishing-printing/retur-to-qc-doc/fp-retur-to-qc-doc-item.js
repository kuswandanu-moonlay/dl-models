'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var FPReturToQCDocDetail=require("./fp-retur-to-qc-doc-detail");

module.exports = class FPReturToQCDocItem extends BaseModel {
    constructor(source) {
        super('fp-retur-to-qc-doc-item', '1.0.0');

        // Define properties.

        this.productionOrderNo = '';
        this.productionOrderId = {};
        this.packingId={};
        this.packingCode='';
        
        this.details=[];
        this.copy(source);

        this.details = this.details.map((detail) => new FPReturToQCDocDetail(detail));
    }
};

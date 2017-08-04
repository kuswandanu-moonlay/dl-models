'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var FPReturToQCDocItem= require("./fp-retur-to-qc-doc-item");

module.exports = class FPReturToQCDoc extends BaseModel {
    constructor(source) {
        super('fp-retur-to-qc-doc', '1.0.0');

        // Define properties.
        this.returNo = '';
        this.destination='';
        this.deliveryOrderNo='';
        this.remark='';
        this.date=new Date();
        this.materialId={};
        this.materialName='';
        this.materialCode='';
        this.materialConstructionId={};
        this.materialConstructionName='';
        this.materialConstructionCode='';
        this.materialWidthFinish='';
        this.isVoid=false;
        this.materialName='';
        this.finishedGoodCode='';
        
        this.items=[];

        this.copy(source);
        this.items = this.items.map((item) => new FPReturToQCDocItem(item));

    }
};

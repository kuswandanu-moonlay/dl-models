'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Buyer = require("../../../master/buyer");
var FPReturFromBuyerDocDetail= require("./fp-retur-fr-byr-doc-detail");

module.exports = class FPReturFrByrDoc extends BaseModel {
    constructor(source) {
        super('fp-retur-fr-byr-doc', '1.0.0');

        // Define properties.
        this.code='';
        this.codeProduct = '';
        this.destination='';
        this.buyerId={};
        this.buyer=new Buyer();
        this.isVoid=false;
        this.date=new Date();
        this.spk='';
        this.coverLetter='';
        this.storageId = {};
        this.storageName = "";
        this.storageReferenceType = "";
        this.storageType = "";
        
        this.details=[];

        this.copy(source);
        this.details = this.details.map((item) => new FPReturFromBuyerDocDetail(item));

    }
};
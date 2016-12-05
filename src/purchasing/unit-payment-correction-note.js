'use strict';
var BaseModel = require('capital-models').BaseModel;
var Supplier = require('../master/supplier');
var UnitPaymentCorrectionNoteItem = require('./unit-payment-correction-note-item');

module.exports = class UnitPaymentCorrectionNote extends BaseModel {
    constructor(source) {
        super('unit-payment-correction-note', '1.0.0');

        //Define Properties
        this.no = '';
        this.date = new Date();
        this.unitPaymentOrderId = {};
        this.unitPaymentOrder = {};
        this.invoiceCorrectionNo = '';
        this.invoiceCorrectionDate = new Date();
        this.incomeTaxCorrectionNo = '';
        this.incomeTaxCorrectionDate = new Date();
        this.vatTaxCorrectionNo = '';
        this.vatTaxCorrectionDate = new Date();
        this.returNoteNo = '';
        this.priceCorrectionType='';
        this.releaseOrderNoteNo='';
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new UnitPaymentCorrectionNoteItem(item));
    }
};
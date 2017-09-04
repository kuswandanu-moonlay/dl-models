'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var Uom = require('../master/uom');
var Currency = require('../master/currency');

module.exports = class UnitPaymentCorrectionNoteItem extends BaseModel {
    constructor(source) {
        super('garment-unit-payment-correction-note-item', '1.0.0');

        //Define Properties
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternalNo = "";
        this.purchaseRequestId = {};
        this.purchaseRequestNo = "";
        this.productId = {};
        this.product = new Product();
        this.quantity = 0;
        this.uomId = {};
        this.uom = new Uom();
        this.pricePerUnit = 0;
        this.priceTotal = 0;
        this.currency = new Currency();
        this.currencyRate = 1;
        this.copy(source);
    }
};
'use strict'
var BaseModel = require('capital-models').BaseModel;
var PurchaseOrderExternal = require('../purchasing/purchase-order-external');
var Product = require('../master/product');
var Uom = require('../master/uom');
var Currency = require('../master/currency');

module.exports = class UnitPaymentPriceCorrectionNoteItem extends BaseModel {
    constructor(source) {
        super('unit-payment-price-correction-note-item', '1.0.0');

        //Define Properties
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternal = new PurchaseOrderExternal();
        this.purchaseRequestId = {};
        this.purchaseRequest = {};
        this.productId = {};
        this.product = new Product();
        this.quantity=0;
        this.uomId = {};
        this.uom = new Uom();
        this.pricePerUnit=0;
        this.priceTotal=0;
        this.currency = new Currency();
        this.currencyRate = 1;
        this.copy(source);
    }
}
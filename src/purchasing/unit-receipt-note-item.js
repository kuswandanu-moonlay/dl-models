'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var Currency = require('../master/currency');

module.exports = class UnitReceiptNoteItem extends BaseModel {
    constructor(source) {
        super('unit-receipt-note-item', '1.0.0');
        this.product = new Product();
        this.deliveredQuantity = 0;
        this.deliveredUom = new uom();
        this.purchaseOrderQuantity = 0;
        this.pricePerDealUnit = 0;
        this.currency = new Currency();
        this.currencyRate = 1;
        this.purchaseOrderId = {};
        this.purchaseOrder = {};
        this.remark = '';
        this.copy(source);
    }
}
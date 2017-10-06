'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');
var Currency = require('../master/currency');
var Buyer = require('../master/buyer');

module.exports = class UnitReceiptNoteItem extends BaseModel {
    constructor(source) {
        super('unit-receipt-note-item', '1.0.0');
        this.product = new Product();
        this.deliveredQuantity = 0;
        this.deliveredUom = new uom();
        this.purchaseOrderQuantity = 0;
        this.pricePerDealUnit = 0;
        this.currency = new Currency();
        this.categoryId = {};
        this.category = {};
        this.purchaseOrderId = {};
        this.purchaseOrderNo = '';
        this.purchaseRequestId = {};
        this.purchaseRequestNo = '';
        this.purchaseRequestRefNo = '';
        this.quantityConversion = 0;
        this.uomConversion = new uom();
        this.conversion = 1;
        this.buyerId = {};
        this.buyer = new Buyer();
        this.correction = [];
        this.remark = '';
        this.copy(source);
    }
};
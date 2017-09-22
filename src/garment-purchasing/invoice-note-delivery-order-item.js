'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../master/uom');
var Product = require('../master/product');

module.exports = class InvoiceNoteItem extends BaseModel {
    constructor(source) {
        super('invoice-note-delivery-order-item', '1.0.0');
        this.purchaseOrderExternalId = {};
        this.purchaseOrderExternalNo = '';

        this.purchaseOrderId = {};
        this.purchaseOrderNo = '';

        this.purchaseRequestId = {};
        this.purchaseRequestNo = '';

        this.productId = {};
        this.product = new Product();

        this.purchaseOrderQuantity = 0;
        this.purchaseOrderUom = new uom();

        this.deliveredQuantity = 0;
        this.pricePerDealUnit = 0;

        this.paymentDueDays = "";
        this.paymentType = "";
        this.paymentMethod = 0;
        this.copy(source);
    }
};
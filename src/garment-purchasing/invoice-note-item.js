'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../master/uom');
var Product = require('../master/product');

module.exports = class InvoiceNoteItem extends BaseModel {
    constructor(source) {
        super('invoice-note-item', '1.0.0');

        this.deliveryOrderId = {};
        this.deliveryOrderNo = '';

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
        this.copy(source);
    }
};
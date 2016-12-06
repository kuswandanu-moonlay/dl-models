'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class PurchaseRequestItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-request-item', '1.0.0');

        this.productId = {};
        this.product = new Product();
        this.quantity = 0;
        
        this.purchaseOrderIds = []; //simpan Id purchase-order yang memuat pr-item ini;

        this.remark = '';

        this.copy(source);
    }
};
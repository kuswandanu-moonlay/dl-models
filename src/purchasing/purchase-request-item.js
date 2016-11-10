'use strict'
var BaseModel = require('capital-models').BaseModel;
var Product = require('../master/product');
var uom = require('../master/uom');

module.exports = class PurchaseRequestItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-request-item', '1.0.0');

        this.productId = {};
        this.product = new Product();
        this.quantity = 0;
        this.uom = new uom();
        
        this.purchaseOrders = []; //simpan Id purchase-order yang memuat pr-item ini;

        this.remark = '';

        this.copy(source);
    }
}
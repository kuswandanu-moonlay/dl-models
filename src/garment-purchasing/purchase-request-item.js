'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var Product = require('../master/product');

module.exports = class PurchaseRequestItem extends BaseModel {
    constructor(source, type) {
        super(type || 'purchase-request-item', '1.0.0');

        this.productId = {};
        this.product = new Product();
        this.quantity = 0;
        this.budgetPrice = 0;
        
        this.categoryId = {};
        this.category = {};

        this.deliveryOrderNos = [];
        this.remark = '';

        this.copy(source);
    }
};